export default function LocalSEOContent() {
  return (
    <div className="sr-only">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Clínica Oftalmológica em Belém - Visual Laser
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A melhor clínica oftalmológica de Belém, especializada em consultas, exames e 
            cirurgias oftalmológicas. Oftalmologistas experientes e tecnologia de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Oftalmologista em Belém */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Oftalmologista em Belém
            </h3>
            <p className="text-gray-600 mb-4">
              Nossos oftalmologistas em Belém são especialistas em diagnóstico e tratamento 
              de doenças oculares. Consultas com médicos experientes e equipamentos modernos.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Consulta oftalmológica completa</li>
              <li>• Exame de vista detalhado</li>
              <li>• Diagnóstico preciso</li>
              <li>• Tratamento personalizado</li>
            </ul>
          </div>

          {/* Óculos em Belém */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Prescrição de Óculos em Belém
            </h3>
            <p className="text-gray-600 mb-4">
              Exame de refração completo para prescrição precisa de lentes. Trabalhamos 
              com óticas parceiras para aquisição de óculos em Belém.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Exame de refração completo</li>
              <li>• Prescrição de óculos</li>
              <li>• Indicação para óticas parceiras</li>
              <li>• Orientações sobre lentes adequadas</li>
            </ul>
          </div>

          {/* Clínica Oftalmológica */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-900 mb-3">
              Clínica de Oftalmologia
            </h3>
            <p className="text-gray-600 mb-4">
              Clínica oftalmológica completa em Belém com todos os serviços: consultas, 
              exames, cirurgias e prescrição de óculos. Tecnologia de última geração. 
              Trabalhamos com óticas parceiras.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Consultas especializadas</li>
              <li>• Exames diagnósticos</li>
              <li>• Cirurgias oftalmológicas</li>
              <li>• Equipamentos modernos</li>
            </ul>
          </div>
        </div>

        {/* Seção de Localização */}
        <div className="mt-12 bg-primary-900 text-white p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Oftalmologista Perto de Mim - Belém, Pará
            </h3>
            <p className="text-lg mb-6">
              Localizada no bairro Nazaré, nossa clínica oftalmológica em Belém atende 
              toda a região metropolitana com excelência e qualidade.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Endereço:</h4>
                <p>Tv. 14 de Março, 1622 - Nazaré, Belém - PA</p>
                <p>CEP: 66055-490</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Horário de Funcionamento:</h4>
                <p>Segunda a Quinta: 08:00 às 18:00</p>
                <p>Sexta: 08:00 às 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
