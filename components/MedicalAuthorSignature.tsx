/**
 * MedicalAuthorSignature Component
 * Displayed at the bottom of medical/educational content.
 * reinforces E-E-A-T (Expertise, Authoritativeness, Trustworthiness).
 */

import { ShieldCheck, GraduationCap } from 'lucide-react';

const MedicalAuthorSignature = () => {
  return (
    <div className="my-12 p-8 bg-gray-50 rounded-2xl border border-gray-200">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-10 h-10 text-primary-600" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
            Informação Médica Verificada
          </h4>
          <p className="text-gray-600 leading-relaxed mb-4">
            Todo o conteúdo deste site foi revisado tecnicamente pelo Corpo Clínico da <strong>Visual Laser</strong>. Nossas informações seguem os protocolos éticos do Conselho Federal de Medicina (CFM) e as diretrizes da Sociedade Brasileira de Oftalmologia.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
              <GraduationCap className="w-4 h-4 mr-2 text-primary-500" />
              Diretor Técnico: Dr. Roberto Carlei Lima (CRM-PA 5071)
            </div>
            <div className="flex items-center text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
              <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
              Conteúdo Auditado: Abril 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalAuthorSignature;
