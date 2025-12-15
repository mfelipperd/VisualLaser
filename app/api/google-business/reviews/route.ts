import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const mybusinessbusinessinformation = google.mybusinessbusinessinformation('v1');

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url?: string;
}

export async function GET(request: NextRequest) {
  try {
    const locationId = process.env.GOOGLE_LOCATION_ID;
    const accessToken = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!locationId) {
      return NextResponse.json(
        {
          error: 'GOOGLE_LOCATION_ID não configurado',
          message: 'Configure a variável de ambiente GOOGLE_LOCATION_ID',
        },
        { status: 500 }
      );
    }

    if (!accessToken) {
      return NextResponse.json(
        {
          error: 'Token de acesso não fornecido',
          message: 'É necessário fornecer um token de acesso OAuth 2.0',
        },
        { status: 401 }
      );
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const response = await mybusinessbusinessinformation.locations.reviews.list({
      auth,
      parent: `locations/${locationId}`,
      pageSize: 10,
      orderBy: 'updateTime desc',
    });

    const reviews: GoogleReview[] =
      response.data.reviews?.map((review) => ({
        author_name: review.reviewer?.displayName || 'Anônimo',
        rating: review.rating || 0,
        text: review.comment || '',
        time: formatReviewTime(review.updateTime),
        profile_photo_url: review.reviewer?.profilePhotoUrl || undefined,
      })) || [];

    return NextResponse.json({
      reviews,
      averageRating: calculateAverageRating(reviews),
      totalReviews: response.data.totalReviewCount || reviews.length,
      success: true,
    });
  } catch (error: any) {
    console.error('Erro ao buscar reviews:', error);

    if (error.code === 401 || error.code === 403) {
      return NextResponse.json(
        {
          error: 'Erro de autenticação',
          message: 'Token de acesso inválido ou expirado',
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        error: 'Erro ao buscar reviews',
        message: error.message || 'Erro desconhecido',
      },
      { status: 500 }
    );
  }
}

function formatReviewTime(updateTime?: string): string {
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

function calculateAverageRating(reviews: GoogleReview[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

