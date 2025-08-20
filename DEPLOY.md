# 🚀 Guia de Deploy - Visual Laser Website

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Vercel (recomendado) ou outra plataforma de deploy
- Node.js 18+ instalado localmente
- Git instalado

## 🔧 Configuração Local

### 1. Clone e Instalação

```bash
# Clone o repositório
git clone <url-do-seu-repo>
cd VisualLaser

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

### 2. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code

# URLs das Redes Sociais
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/visuallaser
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/visuallaser
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5591988968201
```

## 🚀 Deploy no Vercel (Recomendado)

### 1. Conecte ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório da Visual Laser

### 2. Configuração do Projeto

- **Framework Preset**: Next.js
- **Root Directory**: `./` (padrão)
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (automático)

### 3. Variáveis de Ambiente no Vercel

Adicione as mesmas variáveis do `.env.local` no painel do Vercel:

1. Vá para **Settings** > **Environment Variables**
2. Adicione cada variável:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION`
   - `NEXT_PUBLIC_FACEBOOK_URL`
   - `NEXT_PUBLIC_INSTAGRAM_URL`
   - `NEXT_PUBLIC_WHATSAPP_URL`

### 4. Deploy Automático

- Cada push para a branch `main` dispara um deploy automático
- O Vercel gera URLs únicas para cada deploy
- Configure o domínio personalizado em **Settings** > **Domains**

## 🌐 Deploy em Outras Plataformas

### Netlify

1. Conecte o repositório GitHub
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18

### AWS Amplify

1. Conecte o repositório
2. Configure o build:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - "**/*"
   ```

### DigitalOcean App Platform

1. Conecte o repositório
2. Selecione **Next.js** como framework
3. Configure as variáveis de ambiente

## 🔧 Configurações Pós-Deploy

### 1. Domínio Personalizado

1. Configure o DNS apontando para o servidor da plataforma
2. Adicione o domínio no painel da plataforma
3. Configure SSL/HTTPS (automático na maioria das plataformas)

### 2. Google Search Console

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade (domínio)
3. Verifique a propriedade usando a meta tag ou arquivo HTML
4. Envie o sitemap: `https://seudominio.com/sitemap.xml`

### 3. Google Analytics

1. Crie uma propriedade no [Google Analytics](https://analytics.google.com)
2. Copie o ID de medição (G-XXXXXXXXXX)
3. Adicione na variável `NEXT_PUBLIC_GA_MEASUREMENT_ID`
4. Faça um novo deploy

### 4. Testes Pós-Deploy

- [ ] Site carrega corretamente
- [ ] Navegação funciona
- [ ] Formulários funcionam
- [ ] Imagens carregam
- [ ] Responsividade em dispositivos móveis
- [ ] SEO meta tags estão corretas
- [ ] Google Analytics está funcionando

## 📱 Configuração de Redes Sociais

### Facebook/Instagram

1. Configure as URLs nas variáveis de ambiente
2. Atualize os links no componente Footer
3. Teste os links após o deploy

### WhatsApp

1. Configure o número no formato internacional
2. Teste o link de contato
3. Verifique se abre o WhatsApp corretamente

## 🔍 SEO e Performance

### 1. Verificação de SEO

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 2. Sitemap

O sitemap é gerado automaticamente em:

- `https://seudominio.com/sitemap.xml`

### 3. Robots.txt

Configurado automaticamente em:

- `https://seudominio.com/robots.txt`

## 🚨 Troubleshooting

### Problemas Comuns

1. **Build falha**

   - Verifique se todas as dependências estão instaladas
   - Confirme se o Node.js é versão 18+

2. **Imagens não carregam**

   - Verifique se as imagens estão na pasta `public/`
   - Confirme os caminhos nos componentes

3. **Google Analytics não funciona**

   - Verifique se a variável de ambiente está configurada
   - Confirme se o ID está correto

4. **Erro 404 em rotas**
   - Verifique se o `next.config.js` está correto
   - Confirme se as rotas estão definidas

### Logs de Deploy

- **Vercel**: Painel do projeto > **Deployments** > **View Function Logs**
- **Netlify**: **Deploys** > **View deploy log**
- **AWS Amplify**: **Build** > **View build logs**

## 📞 Suporte

Para problemas técnicos:

- **Visual Laser**: marketing@visuallaser.com.br
- **Desenvolvimento**: [Opções Digitais](https://opcoesdigitais.com.br)

## 🔄 Atualizações

### Deploy de Atualizações

1. Faça as alterações no código
2. Commit e push para o repositório
3. Deploy automático será executado
4. Verifique se tudo está funcionando

### Rollback

- **Vercel**: Painel > **Deployments** > **Redeploy** em versão anterior
- **Netlify**: **Deploys** > **Redeploy** em versão anterior
- **AWS Amplify**: **Build** > **Redeploy** em versão anterior

---

**🎉 Parabéns! Seu site da Visual Laser está no ar!**
