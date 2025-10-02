# 🎯 Configuração da Landing Page - Visual Laser

## Variáveis de Ambiente Necessárias

Para que a Landing Page funcione completamente, você precisa configurar as seguintes variáveis de ambiente:

### 📧 Email (Já Configurado)
```env
RESEND_API_KEY=re_51qgBx9m_D7j9J6BdrjCgciH5goMRXQtE
DESTINATION_EMAIL=felipperabelodurans@gmail.com
FROM_EMAIL=felipperabelodurans3@gmail.com
```

### 📊 Pixels de Rastreamento (Adicionar)
```env
# Facebook Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_facebook_pixel_id

# Google Ads Pixel
NEXT_PUBLIC_GOOGLE_ADS_PIXEL_ID=your_google_ads_pixel_id

# TikTok Pixel
NEXT_PUBLIC_TIKTOK_PIXEL_ID=your_tiktok_pixel_id

# LinkedIn Pixel
NEXT_PUBLIC_LINKEDIN_PIXEL_ID=your_linkedin_pixel_id

# Hotjar
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
```

### 🌐 Redes Sociais (Já Configurado)
```env
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/visuallaser
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/visuallaser
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5591988968201
```

### 📈 Analytics (Já Configurado)
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

## Como Configurar

### 1. No Vercel (Produção)
1. Acesse o painel do Vercel
2. Vá para **Settings** > **Environment Variables**
3. Adicione cada variável de pixel de rastreamento
4. Faça um novo deploy

### 2. Localmente (.env.local)
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as variáveis necessárias
3. Reinicie o servidor de desenvolvimento

## URLs da Landing Page

- **Desenvolvimento**: http://localhost:3000/landing-page
- **Produção**: https://visuallaser.med.br/landing-page

## Eventos de Rastreamento Implementados

### Facebook Pixel
- `PageView` - Visualização da página
- `Lead` - Clique em CTA principal
- `ViewContent` - Interesse demonstrado
- `InitiateCheckout` - Início do processo
- `Purchase` - Conversão final (valor: R$ 150)

### Google Ads
- `conversion` - Evento de conversão
- `page_view` - Visualização da página
- `click` - Cliques em CTAs

### TikTok Pixel
- `CompleteRegistration` - Registro no formulário
- `ViewContent` - Visualização de conteúdo
- `ClickButton` - Cliques em botões

### LinkedIn Pixel
- `Lead` - Geração de lead
- `PageView` - Visualização da página

### Hotjar
- Heatmaps automáticos
- Gravações de sessão
- Análise de comportamento

## Testando a Implementação

### 1. Verificar Pixels
```javascript
// No console do navegador
console.log('Facebook Pixel:', window.fbq ? 'Ativo' : 'Inativo');
console.log('Google Ads:', window.gtag ? 'Ativo' : 'Inativo');
console.log('TikTok Pixel:', window.ttq ? 'Ativo' : 'Inativo');
```

### 2. Testar Formulário
1. Preencha o formulário
2. Verifique se o email é enviado
3. Confirme se os eventos são disparados

### 3. Verificar Analytics
1. Acesse Google Analytics
2. Verifique se os eventos aparecem
3. Confirme a conversão

## Monitoramento

### KPIs Principais
- **Taxa de Conversão**: Leads/Visitas
- **Custo por Lead**: Investimento/Leads
- **ROI**: Receita/Investimento
- **Qualidade do Lead**: Taxa de agendamento

### Ferramentas Recomendadas
- Google Analytics 4
- Facebook Ads Manager
- Google Ads
- Hotjar
- Google Tag Manager

## Troubleshooting

### Pixels não funcionam
1. Verifique se as variáveis estão configuradas
2. Confirme se o deploy foi feito
3. Verifique o console do navegador
4. Teste em modo incógnito

### Formulário não envia
1. Verifique as variáveis de email
2. Confirme se o Resend está ativo
3. Verifique os logs do servidor
4. Teste localmente

### Eventos não aparecem
1. Aguarde até 24h para aparecer
2. Verifique se os pixels estão ativos
3. Confirme se os eventos estão sendo disparados
4. Teste com Facebook Pixel Helper

---

**🎯 Landing Page configurada e pronta para capturar leads!**
