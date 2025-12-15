import { google } from 'googleapis';

const mybusinessbusinessinformation = google.mybusinessbusinessinformation('v1');

export interface GoogleBusinessReview {
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url?: string;
}

export interface GoogleBusinessInfo {
  name: string;
  address: string;
  phone: string;
  website: string;
  rating: number;
  totalReviews: number;
  hours: string;
}

export class GoogleBusinessService {
  private auth: any;
  private locationId: string;

  constructor(accessToken: string, locationId: string) {
    this.locationId = locationId;
    this.auth = new google.auth.OAuth2();
    this.auth.setCredentials({ access_token: accessToken });
  }

  async getReviews(pageSize: number = 10): Promise<{
    reviews: GoogleBusinessReview[];
    averageRating: number;
    totalReviews: number;
  }> {
    try {
      const response = await mybusinessbusinessinformation.locations.reviews.list({
        auth: this.auth,
        parent: `locations/${this.locationId}`,
        pageSize,
        orderBy: 'updateTime desc',
      });

      const reviews: GoogleBusinessReview[] =
        response.data.reviews?.map((review) => ({
          author_name: review.reviewer?.displayName || 'Anônimo',
          rating: review.rating || 0,
          text: review.comment || '',
          time: this.formatReviewTime(review.updateTime),
          profile_photo_url: review.reviewer?.profilePhotoUrl || undefined,
        })) || [];

      return {
        reviews,
        averageRating: this.calculateAverageRating(reviews),
        totalReviews: response.data.totalReviewCount || reviews.length,
      };
    } catch (error) {
      console.error('Erro ao buscar reviews:', error);
      throw error;
    }
  }

  async getBusinessInfo(): Promise<GoogleBusinessInfo> {
    try {
      const response = await mybusinessbusinessinformation.locations.get({
        auth: this.auth,
        name: `locations/${this.locationId}`,
        readMask:
          'name,title,storefrontAddress,phoneNumbers,websiteUri,regularHours,rating,userRatingCount',
      });

      const location = response.data;

      return {
        name: location.title || '',
        address: this.formatAddress(location.storefrontAddress),
        phone: location.phoneNumbers?.primaryPhone || '',
        website: location.websiteUri || '',
        rating: location.rating?.averageRating || 0,
        totalReviews: location.rating?.totalCount || 0,
        hours: this.formatBusinessHours(location.regularHours),
      };
    } catch (error) {
      console.error('Erro ao buscar informações do negócio:', error);
      throw error;
    }
  }

  private formatReviewTime(updateTime?: string): string {
    if (!updateTime) return 'há algum tempo';

    const now = new Date();
    const reviewDate = new Date(updateTime);
    const diffInMs = now.getTime() - reviewDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'hoje';
    if (diffInDays === 1) return 'há 1 dia';
    if (diffInDays < 7) return `há ${diffInDays} dias`;
    if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? 'há 1 semana' : `há ${weeks} semanas`;
    }
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? 'há 1 mês' : `há ${months} meses`;
    }
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? 'há 1 ano' : `há ${years} anos`;
  }

  private calculateAverageRating(reviews: GoogleBusinessReview[]): number {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  }

  private formatAddress(address?: any): string {
    if (!address) return '';
    const parts = [
      address.addressLines?.[0],
      address.locality,
      address.administrativeArea,
      address.postalCode,
    ].filter(Boolean);
    return parts.join(', ');
  }

  private formatBusinessHours(regularHours?: any): string {
    if (!regularHours || !regularHours.periods) return '';

    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const periods = regularHours.periods;

    return periods
      .map((period: any) => {
        const dayName = days[period.openDay] || '';
        const openTime = this.formatTime(period.openTime);
        const closeTime = period.closeTime ? this.formatTime(period.closeTime) : 'Fechado';
        return `${dayName}: ${openTime} - ${closeTime}`;
      })
      .join('\n');
  }

  private formatTime(time?: any): string {
    if (!time) return '';
    const hours = String(time.hours || 0).padStart(2, '0');
    const minutes = String(time.minutes || 0).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}

