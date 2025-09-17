import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_51qgBx9m_D7j9J6BdrjCgciH5goMRXQtE')

export async function POST(request: NextRequest) {
  try {
    console.log('Testando envio de email...')
    console.log('Chave Resend:', process.env.RESEND_API_KEY ? 'Presente' : 'Ausente')
    
    const { data, error } = await resend.emails.send({
      from: 'Visual Laser <onboarding@resend.dev>',
      to: ['felipperabelodurans@gmail.com'],
      subject: 'Teste Visual Laser',
      html: '<p>Este é um email de teste da Visual Laser!</p>',
    })

    if (error) {
      console.error('Erro Resend:', error)
      return NextResponse.json({ 
        message: 'Erro ao enviar email', 
        success: false,
        error: error
      })
    }

    console.log('Email enviado:', data)
    return NextResponse.json({ 
      message: 'Email enviado com sucesso!', 
      success: true,
      data: data
    })

  } catch (error) {
    console.error('Erro geral:', error)
    return NextResponse.json({ 
      message: 'Erro interno', 
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 })
  }
}
