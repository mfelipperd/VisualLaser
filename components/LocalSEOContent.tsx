export default function LocalSEOContent() {
  return (
    <div className="sr-only">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Visual Laser: Autoridade em Oftalmologia em Belém desde 1995
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Visual Laser é a clínica oftalmológica de referência em Belém, Pará, com mais de 25 anos 
            de história. Especializada em cirurgias refrativas (SMILE, LASIK) e catarata, 
            combinamos o corpo clínico mais experiente do Norte com tecnologia de padrão mundial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Oftalmologista em Belém */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Oftalmologista Especialista em Belém
            </h3>
            <p className="text-gray-600 mb-4">
              Nossa equipe de oftalmologistas em Belém atua nos bairros de Nazaré e Umarizal, 
              sendo referência para diagnósticos complexos de retina, glaucoma e ceratocone.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Consulta oftalmológica completa com especialistas</li>
              <li>• Exames de alta precisão (OCT, Topografia, Mapeamento)</li>
              <li>• Diagnóstico de catarata e erros refrativos</li>
              <li>• Tratamentos personalizados para cada paciente</li>
            </ul>
          </div>

          {/* Óculos em Belém */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Check-up Ocular e Óculos em Belém
            </h3>
            <p className="text-gray-600 mb-4">
              Realizamos exames de refração computadorizados para prescrição precisa de lentes. 
              Orientamos nossos pacientes sobre as melhores opções de lentes Zeiss e Alcon.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Refração completa para óculos e lentes</li>
              <li>• Adaptação de lentes de contato especiais</li>
              <li>• Avaliação de fadiga ocular e visão digital</li>
              <li>• Localização central no bairro de Nazaré</li>
            </ul>
          </div>

          {/* Clínica Oftalmológica */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Centro Cirúrgico de Excelência
            </h3>
            <p className="text-gray-600 mb-4">
              Como hospital-dia oftalmológico, a Visual Laser oferece segurança total para 
              cirurgias rápidas e sem internação no coração de Belém (PA).
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cirurgia Refrativa SMILE, LASIK e PRK</li>
              <li>• Cirurgia de Catarata com facoemulsificação</li>
              <li>• Equipamentos de última geração</li>
              <li>• Protocolos rigorosos de segurança e higiene</li>
            </ul>
          </div>
        </div>

        {/* Seção de Localização */}
        <div className="mt-12 bg-primary-900 text-white p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Oftalmologia de Alta Performance em Belém (PA)
            </h3>
            <p className="text-lg mb-6">
              Situada na Travessa 14 de Março, no bairro de Nazaré, a Visual Laser é 
              facilmente acessível para moradores de Batista Campos, Reduto e Marco.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Sede Belém:</h4>
                <p>Tv. 14 de Março, 1622 (entre Av. Nazaré e Av. José Malcher)</p>
                <p>Nazaré, Belém - PA. CEP: 66055-490</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Horários para Agendamento:</h4>
                <p>Segunda a Quinta: 08h às 18h</p>
                <p>Sexta: 08h às 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
