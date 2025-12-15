import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const getRedirectUri = () => {
  if (process.env.GOOGLE_REDIRECT_URI) {
    return process.env.GOOGLE_REDIRECT_URI;
  }
  
  // Em desenvolvimento, usar localhost
  const isDevelopment = process.env.NODE_ENV !== 'production' || 
                        process.env.NEXT_PUBLIC_USE_LOCALHOST === 'true';
  
  if (isDevelopment) {
    return 'http://localhost:3000/api/google-business/auth/callback';
  }
  
  return 'https://visuallaser.med.br/api/google-business/auth/callback';
};

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  getRedirectUri()
);

const SCOPES = [
  'https://www.googleapis.com/auth/business.manage',
];

export async function GET(request: NextRequest) {
  try {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    });

    return NextResponse.json({
      authUrl,
      success: true,
    });
  } catch (error: any) {
    console.error('Erro ao gerar URL de autenticação:', error);
    return NextResponse.json(
      {
        error: 'Erro ao gerar URL de autenticação',
        message: error.message || 'Erro desconhecido',
      },
      { status: 500 }
    );
  }
}

