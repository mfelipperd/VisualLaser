# Visual Laser - Website Institucional

Site institucional moderno da Visual Laser, clínica oftalmológica de referência em Belém, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- **SPA (Single Page Application)** com Next.js 14
- **SEO otimizado** com meta tags, Open Graph e Twitter Cards
- **Design responsivo** e moderno com Tailwind CSS
- **Animações suaves** com Framer Motion
- **Performance otimizada** com lazy loading e otimizações de imagem
- **Acessibilidade** seguindo as melhores práticas
- **Fácil manutenção** com componentes reutilizáveis

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **React Intersection Observer** - Animações baseadas em scroll

## 📁 Estrutura do Projeto

```
VisualLaser/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/             # Componentes React
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── Hero.tsx           # Banner principal com slider
│   ├── About.tsx          # Seção sobre a empresa
│   ├── Services.tsx       # Serviços (exames e cirurgias)
│   ├── PSVL.tsx           # Programa Solidário Visual Laser
│   ├── Testimonials.tsx   # Avaliações dos pacientes
│   └── Footer.tsx         # Rodapé com informações de contato
├── public/                 # Arquivos estáticos
├── package.json            # Dependências do projeto
├── tailwind.config.js      # Configuração do Tailwind CSS
├── next.config.js          # Configuração do Next.js
└── tsconfig.json           # Configuração do TypeScript
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd VisualLaser
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse o projeto**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a build de produção
- `npm run lint` - Executa o linter

## 🎨 Personalização

### Cores

As cores principais podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... outras variações
  },
  secondary: {
    // ... configurações
  },
  accent: {
    // ... configurações
  }
}
```

### Conteúdo

O conteúdo pode ser facilmente editado nos arquivos de componentes:

- **Header.tsx** - Menu de navegação e informações de contato
- **Hero.tsx** - Slides do banner principal
- **About.tsx** - Informações sobre a empresa
- **Services.tsx** - Lista de exames e cirurgias
- **PSVL.tsx** - Detalhes do programa solidário
- **Testimonials.tsx** - Avaliações dos pacientes
- **Footer.tsx** - Links e informações de contato

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🔍 SEO

O projeto inclui otimizações completas para SEO:

- Meta tags otimizadas
- Open Graph para redes sociais
- Twitter Cards
- Schema markup
- URLs amigáveis
- Sitemap automático
- Meta tags geo-localização

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Heroku

## 📝 Licença

Este projeto foi desenvolvido para a Visual Laser. Todos os direitos reservados.

## 👥 Desenvolvimento

Desenvolvido por [Opções Digitais](https://opcoesdigitais.com.br)

---

## 🆘 Suporte

Para dúvidas ou suporte técnico, entre em contato:

- **Email**: marketing@visuallaser.com.br
- **Telefone**: (91) 3225-4422
- **WhatsApp**: (91) 98896-8201

## 🔄 Atualizações

Para manter o projeto atualizado:

```bash
npm update
# ou
yarn upgrade
```

## 📊 Performance

O projeto foi otimizado para performance:

- Lazy loading de componentes
- Otimização de imagens
- Bundle splitting automático
- Cache otimizado
- Compressão de assets
