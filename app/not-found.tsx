import Link from "next/link";
import { ArrowLeft, Search, Shield, Calendar, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full text-center">
        {/* Error Code & Icon */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-gray-200">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary-50 rounded-full p-6 text-primary-600 shadow-lg border border-primary-100">
               <Search className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Conteúdo não encontrado
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Desculpe, a página que você procura não existe ou foi movida para um novo endereço. Mas não se preocupe, cuidamos da sua visão por aqui!
        </p>

        {/* Recovery Links (The "Crawl Budget" Recovery) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link 
            href="/convenios"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary-200 hover:shadow-md transition-all group"
          >
            <Shield className="w-8 h-8 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-gray-800">Convênios</span>
            <span className="text-xs text-gray-400 mt-1">Veja planos aceitos</span>
          </Link>

          <Link 
            href="/servicos/exames-oftalmologicos"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary-200 hover:shadow-md transition-all group"
          >
            <Calendar className="w-8 h-8 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-gray-800">Exames</span>
            <span className="text-xs text-gray-400 mt-1">Diagnóstico completo</span>
          </Link>

          <Link 
            href="/contato"
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary-200 hover:shadow-md transition-all group"
          >
            <MapPin className="w-8 h-8 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-gray-800">Agendamento</span>
            <span className="text-xs text-gray-400 mt-1">Fale conosco</span>
          </Link>
        </div>

        {/* Main CTA */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-primary-900 hover:bg-primary-800 text-white font-bold py-4 px-8 rounded-xl transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar para a Página Inicial</span>
        </Link>
      </div>
    </main>
  );
}
