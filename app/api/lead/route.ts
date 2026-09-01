import { NextRequest, NextResponse } from 'next/server'

type LeadData = {
  name: string
  email: string
  phone: string
  subject?: string
  message?: string
  source: 'blur-modal' | 'contact-form'
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json()
    const { name, email, phone, subject, message, source } = body

    if (!name || !email || !phone) {
      return NextResponse.json({
        message: 'Nome, email e telefone são obrigatórios',
        success: false
      }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        message: 'Formato de email inválido',
        success: false
      }, { status: 400 })
    }

    const appsScriptUrl = process.env.LEADS_APPS_SCRIPT_URL
    if (!appsScriptUrl) {
      return NextResponse.json({
        message: 'Integração com a planilha não configurada',
        success: false
      }, { status: 500 })
    }

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, subject, message, source }),
    })

    const rawResult = await response.text()
    let scriptResult: { success?: boolean; message?: string } | null = null
    try {
      scriptResult = JSON.parse(rawResult)
    } catch {
      scriptResult = null
    }

    if (!response.ok || !scriptResult || scriptResult.success !== true) {
      return NextResponse.json({
        message: scriptResult?.message || 'Erro ao registrar lead na planilha',
        success: false
      }, { status: 502 })
    }

    return NextResponse.json({
      message: 'Lead registrado com sucesso!',
      success: true
    })

  } catch (error) {
    return NextResponse.json({
      message: 'Erro interno do servidor',
      success: false
    }, { status: 500 })
  }
}
