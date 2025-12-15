import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const mybusinessbusinessinformation = google.mybusinessbusinessinformation('v1');

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

    const response = await mybusinessbusinessinformation.locations.get({
      auth,
      name: `locations/${locationId}`,
      readMask: 'name,title,storefrontAddress,phoneNumbers,websiteUri,regularHours,rating,userRatingCount',
    });

    const location = response.data;

    return NextResponse.json({
      name: location.title || '',
      address: formatAddress(location.storefrontAddress),
      phone: location.phoneNumbers?.primaryPhone || '',
      website: location.websiteUri || '',
      rating: location.rating?.averageRating || 0,
      totalReviews: location.rating?.totalCount || 0,
      hours: formatBusinessHours(location.regularHours),
      success: true,
    });
  } catch (error: any) {
    console.error('Erro ao buscar informações do negócio:', error);

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
        error: 'Erro ao buscar informações',
        message: error.message || 'Erro desconhecido',
      },
      { status: 500 }
    );
  }
}

function formatAddress(address?: any): string {
  if (!address) return '';
  const parts = [
    address.addressLines?.[0],
    address.locality,
    address.administrativeArea,
    address.postalCode,
  ].filter(Boolean);
  return parts.join(', ');
}

function formatBusinessHours(regularHours?: any): string {
  if (!regularHours || !regularHours.periods) return '';

  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const periods = regularHours.periods;

  return periods
    .map((period: any) => {
      const dayName = days[period.openDay] || '';
      const openTime = formatTime(period.openTime);
      const closeTime = period.closeTime ? formatTime(period.closeTime) : 'Fechado';
      return `${dayName}: ${openTime} - ${closeTime}`;
    })
    .join('\n');
}

function formatTime(time?: any): string {
  if (!time) return '';
  const hours = String(time.hours || 0).padStart(2, '0');
  const minutes = String(time.minutes || 0).padStart(2, '0');
  return `${hours}:${minutes}`;
}

