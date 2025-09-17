# Configuração de Envio de Emails - Visual Laser

## Visão Geral
Este projeto foi configurado para enviar emails automaticamente usando o Resend quando usuários preenchem o popup de coleta de dados ou o formulário de contato.

## Configuração Necessária

### 1. Configurar Resend
1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta ou faça login
3. Vá para "API Keys" no dashboard
4. Crie uma nova API key
5. Copie a chave gerada

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email de destino para receber os leads
DESTINATION_EMAIL=felipperabelodurans@gmail.com

# Email de origem (deve ser verificado no Resend)
FROM_EMAIL=felipperabelodurans3@gmail.com
```

### 3. Verificar Domínio no Resend
1. No dashboard do Resend, vá para "Domains"
2. Adicione o domínio `gmail.com` ou configure um domínio personalizado
3. Siga as instruções de verificação DNS

## Como Funciona

### Popup de Coleta de Dados (BlurModal)
- Aparece automaticamente para novos visitantes
- Coleta: nome, email e telefone
- Envia dados para `felipperabelodurans@gmail.com`
- Salva dados localmente mesmo se o envio falhar

### Formulário de Contato
- Localizado na página de contato
- Coleta: nome, email, telefone, assunto e mensagem
- Envia dados para `felipperabelodurans@gmail.com`
- Mostra feedback visual de sucesso/erro

## Estrutura da API

### Endpoint: `/api/send-email`
- **Método**: POST
- **Content-Type**: application/json

### Dados de Entrada:
```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "subject": "string (opcional)",
  "message": "string (opcional)",
  "source": "blur-modal" | "contact-form"
}
```

### Resposta de Sucesso:
```json
{
  "message": "Email enviado com sucesso!",
  "success": true
}
```

### Resposta de Erro:
```json
{
  "message": "Descrição do erro",
  "success": false
}
```

## Template do Email
Os emails são enviados com um template HTML responsivo que inclui:
- Header com logo da Visual Laser
- Informações do cliente
- Fonte dos dados (popup ou formulário)
- Data e hora do envio
- Design responsivo e profissional

## Testando a Implementação

1. Configure as variáveis de ambiente
2. Execute `npm run dev`
3. Acesse o site
4. Preencha o popup ou formulário de contato
5. Verifique se o email foi recebido

## Troubleshooting

### Erro de API Key
- Verifique se a chave está correta no `.env.local`
- Confirme se a chave está ativa no dashboard do Resend

### Erro de Domínio
- Verifique se o domínio de origem está verificado no Resend
- Para Gmail, use o domínio verificado ou configure um domínio personalizado

### Emails não chegam
- Verifique a pasta de spam
- Confirme se os emails de destino estão corretos
- Verifique os logs do console para erros

## Segurança
- A API valida todos os dados de entrada
- Emails são enviados apenas para endereços configurados
- Rate limiting pode ser implementado se necessário
