import type { Metadata } from "next";
import { FileText } from "lucide-react";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Termos de Uso - Visual Laser",
  description:
    "Condições de uso do site da Visual Laser Clínica Oftalmológica, incluindo regras de agendamento, propriedade intelectual e limitação de responsabilidade.",
  alternates: {
    canonical: "https://visuallaser.med.br/termos-uso",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosUsoPage() {
  return (
    <main className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Termos de Uso", item: "/termos-uso" },
        ]}
      />

      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
                <FileText className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  Termos e Condições
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Termos de Uso
              </h1>
              <p className="text-gray-500">Última atualização: novembro de 2026</p>
            </div>

            <div className="prose prose-slate max-w-none bg-white rounded-2xl shadow-sm p-6 sm:p-10">
              <p>
                Estes Termos de Uso regulam o acesso e a utilização do site{" "}
                <strong>visuallaser.med.br</strong>, de propriedade da{" "}
                <strong>Visual Laser Clínica Oftalmológica</strong> (&quot;Visual Laser&quot;, &quot;nós&quot;). Ao
                acessar ou utilizar este site, você concorda com os termos descritos abaixo.
              </p>

              <h2>1. Objeto do site</h2>
              <p>
                O site tem como finalidade apresentar informações institucionais sobre a Visual
                Laser, seus serviços oftalmológicos, convênios aceitos e permitir o contato e
                solicitação de agendamento de consultas por pacientes e interessados.
              </p>

              <h2>2. Agendamento de consultas</h2>
              <p>
                As solicitações de agendamento feitas pelo site (por formulário, WhatsApp ou
                outro canal informado) são pedidos de contato, não uma confirmação automática de
                horário. A confirmação definitiva da consulta é feita por nossa equipe,
                diretamente com o paciente, por telefone, e-mail ou WhatsApp.
              </p>

              <h2>3. Informações sobre convênios</h2>
              <p>
                As informações sobre convênios aceitos têm caráter informativo e podem sofrer
                alterações sem aviso prévio, conforme vigência dos contratos entre a clínica e as
                operadoras. Recomendamos sempre confirmar a cobertura do seu plano diretamente
                com nossa equipe antes do atendimento.
              </p>

              <h2>4. Conteúdo do site</h2>
              <p>
                As informações disponibilizadas no site têm caráter exclusivamente informativo e
                não substituem uma consulta, diagnóstico ou orientação médica presencial. Em
                caso de sintomas, urgência ou dúvidas sobre sua saúde ocular, procure atendimento
                médico diretamente.
              </p>

              <h2>5. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo do site — textos, imagens, logotipos, identidade visual e
                layout — é de propriedade da Visual Laser ou licenciado para seu uso, sendo
                protegido pela legislação de direitos autorais e propriedade industrial. É
                proibida a reprodução, distribuição ou uso comercial sem autorização prévia.
              </p>

              <h2>6. Links e serviços de terceiros</h2>
              <p>
                O site pode conter links para serviços de terceiros, como WhatsApp, redes sociais
                e ferramentas de análise (Google Analytics). Não nos responsabilizamos pelo
                conteúdo, práticas de privacidade ou disponibilidade desses serviços externos.
              </p>

              <h2>7. Limitação de responsabilidade</h2>
              <p>
                Envidamos esforços razoáveis para manter o site disponível e as informações
                atualizadas, mas não garantimos disponibilidade ininterrupta nem a ausência de
                eventuais erros. A Visual Laser não se responsabiliza por danos decorrentes do
                uso indevido das informações do site ou de indisponibilidade temporária.
              </p>

              <h2>8. Alterações destes termos</h2>
              <p>
                Estes Termos de Uso podem ser atualizados periodicamente, a critério da Visual
                Laser, para refletir mudanças legais, operacionais ou nos serviços oferecidos.
              </p>

              <h2>9. Legislação aplicável</h2>
              <p>
                Estes Termos de Uso são regidos pela legislação brasileira. Eventuais
                controvérsias serão submetidas ao foro da comarca de Belém - PA.
              </p>

              <h2>10. Contato</h2>
              <ul>
                <li>E-mail: <a href="mailto:contato@visuallaser.med.br">contato@visuallaser.med.br</a></li>
                <li>Telefone: +55 91 3225-4422</li>
                <li>Endereço: Tv. 14 de Março, 1622, Nazaré, Belém - PA, 66055-490</li>
              </ul>

              <p>
                Para saber como tratamos seus dados pessoais, consulte também nossa{" "}
                <a href="/politica-privacidade">Política de Privacidade</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
