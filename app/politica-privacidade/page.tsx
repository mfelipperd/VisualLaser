import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Política de Privacidade - Visual Laser",
  description:
    "Saiba como a Visual Laser coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei Geral de Proteção de Dados).",
  alternates: {
    canonical: "https://visuallaser.med.br/politica-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Política de Privacidade", item: "/politica-privacidade" },
        ]}
      />

      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  LGPD
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Política de Privacidade
              </h1>
              <p className="text-gray-500">Última atualização: novembro de 2026</p>
            </div>

            <div className="prose prose-slate max-w-none bg-white rounded-2xl shadow-sm p-6 sm:p-10">
              <p>
                Esta Política de Privacidade descreve como a <strong>Visual Laser Clínica
                Oftalmológica</strong> (&quot;Visual Laser&quot;, &quot;nós&quot;) coleta, utiliza, armazena e
                protege os dados pessoais de pacientes e visitantes do site{" "}
                <strong>visuallaser.med.br</strong>, em conformidade com a Lei Geral de Proteção
                de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
              </p>

              <h2>1. Quais dados coletamos</h2>
              <p>Coletamos os seguintes dados quando você interage com nosso site:</p>
              <ul>
                <li>
                  <strong>Dados de contato</strong>: nome, e-mail e telefone, informados
                  voluntariamente em formulários de agendamento, contato ou captura de lead.
                </li>
                <li>
                  <strong>Dados de navegação</strong>: páginas visitadas, tempo de permanência,
                  origem do acesso e interações no site, coletados de forma automatizada via
                  cookies e ferramentas de análise (Google Analytics).
                </li>
                <li>
                  <strong>Dados de comunicação</strong>: mensagens trocadas via WhatsApp quando
                  você inicia contato por esse canal a partir do site.
                </li>
              </ul>

              <h2>2. Para que usamos seus dados</h2>
              <ul>
                <li>Responder a solicitações de agendamento de consulta e contato;</li>
                <li>Enviar informações sobre nossos serviços, quando você consentir;</li>
                <li>
                  Melhorar a experiência de navegação e o conteúdo do site, por meio de análises
                  estatísticas agregadas (Google Analytics);
                </li>
                <li>Cumprir obrigações legais e regulatórias aplicáveis a estabelecimentos de saúde.</li>
              </ul>

              <h2>3. Compartilhamento de dados</h2>
              <p>
                Não vendemos nem alugamos seus dados pessoais. Podemos compartilhar dados
                estritamente necessários com:
              </p>
              <ul>
                <li>
                  Prestadores de serviço que nos auxiliam a operar o site e processar
                  agendamentos (ex.: Google, provedores de hospedagem e planilhas de gestão de
                  leads);
                </li>
                <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
              </ul>

              <h2>4. Cookies</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para lembrar suas preferências,
                entender como o site é utilizado (Google Analytics) e medir a efetividade de
                nossas campanhas. Você pode gerenciar ou desativar cookies diretamente nas
                configurações do seu navegador, embora isso possa afetar algumas funcionalidades
                do site.
              </p>

              <h2>5. Seus direitos como titular dos dados</h2>
              <p>Nos termos da LGPD, você pode, a qualquer momento, solicitar:</p>
              <ul>
                <li>Confirmação da existência de tratamento dos seus dados;</li>
                <li>Acesso, correção ou atualização dos seus dados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
                <li>Revogação do consentimento e eliminação dos dados tratados com base nele.</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato pelo e-mail{" "}
                <a href="mailto:contato@visuallaser.med.br">contato@visuallaser.med.br</a>.
              </p>

              <h2>6. Segurança da informação</h2>
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados
                pessoais contra acessos não autorizados e situações acidentais ou ilícitas de
                destruição, perda, alteração, comunicação ou difusão.
              </p>

              <h2>7. Retenção de dados</h2>
              <p>
                Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas
                nesta política, ou conforme exigido por obrigações legais e regulatórias
                aplicáveis a estabelecimentos de saúde.
              </p>

              <h2>8. Alterações desta política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos
                revisitar esta página regularmente para se manter informado sobre como
                protegemos seus dados.
              </p>

              <h2>9. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos
                seus dados pessoais, entre em contato:
              </p>
              <ul>
                <li>E-mail: <a href="mailto:contato@visuallaser.med.br">contato@visuallaser.med.br</a></li>
                <li>Telefone: +55 91 3225-4422</li>
                <li>Endereço: Tv. 14 de Março, 1622, Nazaré, Belém - PA, 66055-490</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
