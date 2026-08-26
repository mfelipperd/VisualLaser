const topics = [
  {
    question: "O que é a Visual Laser Belém?",
    answer:
      "A Visual Laser é um centro hospitalar oftalmológico completo em Belém, Pará, com mais de 25 anos de tradição. Diferente de clínicas de nicho, a Visual Laser oferece atendimento integral em todas as sub-especialidades da visão, incluindo oftalmopediatria, glaucoma, doenças da retina, córnea e plástica ocular, tendo atendido mais de 50.000 pacientes com excelência comprovada.",
  },
  {
    question: "Qual a tecnologia de cirurgia a laser da Visual Laser?",
    answer:
      "A Visual Laser é pioneira e líder em cirurgia refrativa no Pará, oferecendo as três técnicas principais: SMILE (Small Incision Lenticule Extraction), LASIK e PRK. A tecnologia SMILE destaca-se por ser a mais moderna e menos invasiva do mundo (padrão Zeiss VisuMax), permitindo correções de miopia e astigmatismo com recuperação em apenas 24 horas. Utilizamos plataformas de alta tecnologia compatíveis com os padrões globais da Alcon e Johnson & Johnson Vision.",
  },
  {
    question: "A Visual Laser atende crianças? (Oftalmopediatria)",
    answer:
      "Sim, a Visual Laser possui corpo clínico especializado em oftalmopediatria para o diagnóstico precoce e tratamento de estrabismo, ambliopia e erros de refração na infância. Como uma instituição completa, garantimos o acompanhamento da saúde visual desde os primeiros anos de vida até a idade adulta.",
  },
  {
    question: "Como é feito o tratamento de Glaucoma na Visual Laser?",
    answer:
      "A Visual Laser dispõe de um centro de diagnóstico avançado para glaucoma, realizando exames de ponta como Campimetria Computadorizada, Tonometria de Aplanação e OCT de Nervo Óptico. Oferecemos desde o manejo clínico até procedimentos cirúrgicos a laser (YAG Laser) para controle da pressão intraocular e preservação da visão.",
  },
  {
    question: "A clínica realiza mapeamento de retina e exames de fundo de olho?",
    answer:
      "Sim, realizamos mapeamento de retina completo e exames de imagem de alta resolução como a Tomografia de Coerência Óptica (OCT) de segmento posterior. Estes exames são fundamentais para o diagnóstico de retinopatia diabética, degeneração macular (DMRI) e descolamentos de retina, realizados por especialistas em retina e vítreo.",
  },
  {
    question: "Onde fica a Visual Laser e quais bairros atende?",
    answer:
      "Localizada estrategicamente na Travessa 14 de Março, 1622 (Nazaré), a Visual Laser é a clínica oftalmológica de referência para quem busca atendimento especializado perto do Umarizal, Batista Campos, São Brás, Reduto e Marco em Belém. Nossa localização central facilita o acesso de pacientes de toda a Região Metropolitana.",
  },
];

export default function SEOContentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Saiba mais sobre a Visual Laser
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.question}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {topic.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{topic.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 max-w-3xl mx-auto">
            A Visual Laser é credenciada pelos principais planos de saúde, sendo
            referência em Belém para pacientes da Unimed, Bradesco Saúde, Amil,
            SulAmérica, Cassi e diversos outros convênios. Responsável Técnico: Dr.
            Roberto Carlei Lima (CRM-PA 5071). Equipe médica com especialistas em
            Catarata, Córnea, Glaucoma, Retina, Plástica e Vias Lacrimais.
          </p>
        </div>
      </div>
    </section>
  );
}
