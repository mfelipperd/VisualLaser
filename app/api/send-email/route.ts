import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_51qgBx9m_D7j9J6BdrjCgciH5goMRXQtE')

type EmailData = {
  name: string
  email: string
  phone: string
  subject?: string
  message?: string
  source: 'blur-modal' | 'contact-form'
}

export async function POST(request: NextRequest) {
  // API send-email chamada via App Router
  
  try {
    // Verificação das variáveis de ambiente (removido para produção)

    const body: EmailData = await request.json()
    // Dados recebidos (removido para produção)

    const { name, email, phone, subject, message, source } = body

    // Validar dados obrigatórios
    if (!name || !email || !phone) {
      return NextResponse.json({
        message: 'Nome, email e telefone são obrigatórios',
        success: false
      }, { status: 400 })
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        message: 'Formato de email inválido',
        success: false
      }, { status: 400 })
    }

    // Determinar o assunto baseado na fonte
    const emailSubject = source === 'blur-modal' 
      ? 'Novo Lead - Popup de Coleta de Dados - Visual Laser'
      : subject || 'Novo Contato - Formulário de Contato - Visual Laser'

    // Criar o conteúdo do email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Visual Laser - Novo Contato</h1>
          <p style="color: #e0e6ff; margin: 10px 0 0 0; font-size: 16px;">Dados coletados do site</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0; font-size: 20px;">Informações do Cliente</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Nome:</strong>
            <p style="margin: 5px 0; color: #555; font-size: 16px;">${name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Email:</strong>
            <p style="margin: 5px 0; color: #555; font-size: 16px;">${email}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Telefone:</strong>
            <p style="margin: 5px 0; color: #555; font-size: 16px;">${phone}</p>
          </div>
          
          ${message ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #667eea;">Mensagem:</strong>
            <p style="margin: 5px 0; color: #555; font-size: 16px; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #667eea;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Fonte:</strong> ${source === 'blur-modal' ? 'Popup de Coleta de Dados' : 'Formulário de Contato'}<br>
              <strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>Este email foi enviado automaticamente pelo site da Visual Laser</p>
        </div>
      </div>
    `

    // Enviando email (removido para produção)

    // Enviar email usando Resend
    const { error } = await resend.emails.send({
      from: 'Visual Laser <onboarding@resend.dev>',
      to: [process.env.DESTINATION_EMAIL || 'felipperabelodurans@gmail.com'],
      subject: emailSubject,
      html: emailContent,
    })

    if (error) {
      // Erro ao enviar email (removido para produção)
      return NextResponse.json({
        message: 'Erro interno do servidor ao enviar email',
        success: false
      }, { status: 500 })
    }

    // Email enviado com sucesso (removido para produção)

    return NextResponse.json({
      message: 'Email enviado com sucesso!',
      success: true
    })

  } catch (error) {
    // Erro na API de envio de email (removido para produção)
    return NextResponse.json({
      message: 'Erro interno do servidor',
      success: false
    }, { status: 500 })
  }
}
