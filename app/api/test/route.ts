import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'API funcionando!', 
    success: true,
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      message: 'Dados recebidos com sucesso!', 
      success: true,
      receivedData: body
    })
  } catch (error) {
    return NextResponse.json({ 
      message: 'Erro ao processar dados', 
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 })
  }
}
