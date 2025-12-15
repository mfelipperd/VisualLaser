import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const getRedirectUri = () => {
  if (process.env.GOOGLE_REDIRECT_URI) {
    return process.env.GOOGLE_REDIRECT_URI;
  }
  
  return 'https://visuallaser.med.br/api/google-business/auth/callback';
};

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  getRedirectUri()
);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      const errorHtml = `
        <!DOCTYPE html>
        <html>
          <head><title>Erro OAuth</title></head>
          <body style="font-family: Arial; padding: 50px; text-align: center;">
            <h1 style="color: #dc3545;">❌ Erro na Autenticação</h1>
            <p>Erro: ${error}</p>
            <p><a href="/">Voltar para o site</a></p>
          </body>
        </html>
      `;
      return new NextResponse(errorHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (!code) {
      const errorHtml = `
        <!DOCTYPE html>
        <html>
          <head><title>Erro OAuth</title></head>
          <body style="font-family: Arial; padding: 50px; text-align: center;">
            <h1 style="color: #dc3545;">❌ Código de autorização não encontrado</h1>
            <p><a href="/">Voltar para o site</a></p>
          </body>
        </html>
      `;
      return new NextResponse(errorHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    // Retornar página HTML simples com o token para copiar
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Token OAuth - Visual Laser</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 50px auto;
              padding: 20px;
              background: #f5f5f5;
            }
            .container {
              background: white;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 {
              color: #333;
              margin-bottom: 20px;
            }
            .success {
              color: #28a745;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .token-box {
              background: #f8f9fa;
              border: 2px solid #28a745;
              border-radius: 4px;
              padding: 15px;
              margin: 20px 0;
              word-break: break-all;
              font-family: monospace;
              font-size: 14px;
            }
            .instructions {
              background: #e7f3ff;
              border-left: 4px solid #2196F3;
              padding: 15px;
              margin: 20px 0;
            }
            .instructions ol {
              margin: 10px 0;
              padding-left: 20px;
            }
            .instructions li {
              margin: 8px 0;
            }
            .copy-btn {
              background: #28a745;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 16px;
              margin-top: 10px;
            }
            .copy-btn:hover {
              background: #218838;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>✅ Autenticação OAuth Concluída</h1>
            <p class="success">Token de acesso gerado com sucesso!</p>
            
            <div class="instructions">
              <h3>Próximos passos:</h3>
              <ol>
                <li>Copie o token abaixo</li>
                <li>Adicione no arquivo <code>.env.local</code>:</li>
                <li><code>NEXT_PUBLIC_GOOGLE_ACCESS_TOKEN=seu_token_aqui</code></li>
                <li>Reinicie o servidor: <code>npm run dev</code></li>
              </ol>
            </div>
            
            <h3>Access Token:</h3>
            <div class="token-box" id="token">${tokens.access_token}</div>
            <button class="copy-btn" onclick="copyToken()">Copiar Token</button>
            
            <script>
              function copyToken() {
                const token = document.getElementById('token').textContent;
                navigator.clipboard.writeText(token).then(() => {
                  alert('Token copiado com sucesso!');
                });
              }
            </script>
          </div>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error: any) {
    console.error('Erro no callback de autenticação:', error);
    return NextResponse.redirect(
      new URL(
        `/admin/google-business?error=${encodeURIComponent(error.message || 'Erro desconhecido')}`,
        request.url
      )
    );
  }
}

