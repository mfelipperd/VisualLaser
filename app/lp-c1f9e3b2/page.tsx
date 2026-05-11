'use client';

import Script from 'next/script';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Calendar, CheckCircle2,
  Users, Award, Clock, Heart, Eye, Activity,
  Stethoscope, ChevronDown, Facebook,
  Instagram, Youtube, MapPin, Mail, Microscope, Zap, Lightbulb, MessageCircle, X
} from 'lucide-react';
const heroBg = '/images/lp-catarata/cirurgia_catarata_visual_laser_2.jpg';
const empresaImg = '/images/lp-catarata/empresa_visual_laser.jpg';
const logoVisual = '/images/lp-catarata/logo-visual-branca.png';
const psvlImg = '/images/lp-catarata/PSVL.webp';
const logoAmazoniaSaude = '/images/lp-catarata/amazonia-saude.png';
const logoAmil = '/images/lp-catarata/amil.png';
const logoAspara = '/images/lp-catarata/aspara.png';
const logoAssefaz = '/images/lp-catarata/assefaz.png';
const logoBacen = '/images/lp-catarata/bacen.png';
const logoBradesco = '/images/lp-catarata/bradesco-saude.png';
const logoCassi = '/images/lp-catarata/cassi.png';
const logoConab = '/images/lp-catarata/conab.png';
const logoCorreios = '/images/lp-catarata/correios.png';
const logoEletronorte = '/images/lp-catarata/eletronorte.png';
const logoEmbratel = '/images/lp-catarata/embratel.png';
const logoFusex = '/images/lp-catarata/fusex.png';
const logoGarantiaSaude = '/images/lp-catarata/garantia-de-saude.png';
const logoInfraero = '/images/lp-catarata/infraero.png';
const logoLiderSaude = '/images/lp-catarata/lider-saude.png';
const logoMediservice = '/images/lp-catarata/mediservice.png';
const logoPetrobras = '/images/lp-catarata/petrobras.png';
const logoPlanAssiste = '/images/lp-catarata/plan-assiste.png';
const logoProSocialTrf = '/images/lp-catarata/pro-social-trf.png';
const logoProasaSaude = '/images/lp-catarata/proasa-saude.png';
const logoSaudeCaixa = '/images/lp-catarata/saude-caixa.png';
const logoSulamerica = '/images/lp-catarata/sulamerica.png';
const logoTre = '/images/lp-catarata/tre.png';
const logoTrt = '/images/lp-catarata/trt.png';
const logoUnafisco = '/images/lp-catarata/unafisco.png';
const logoUnimed = '/images/lp-catarata/unimed.png';

const insuranceLogos: Record<string, any> = {
  "Unimed": logoUnimed,
  "Bradesco Saúde": logoBradesco,
  "SulAmérica": logoSulamerica,
  "CASSI": logoCassi,
  "Petrobras": logoPetrobras,
  "Eletronorte": logoEletronorte,
  "Correios": logoCorreios,
  "Amil": logoAmil,
  "Saúde Caixa": logoSaudeCaixa,
  "Amazônia Saúde": logoAmazoniaSaude,
  "Aspara": logoAspara,
  "Assefaz": logoAssefaz,
  "Bacen": logoBacen,
  "Conab": logoConab,
  "Embratel": logoEmbratel,
  "Fusex": logoFusex,
  "Garantia de Saúde": logoGarantiaSaude,
  "Infraero": logoInfraero,
  "Lider Saúde": logoLiderSaude,
  "Mediservice": logoMediservice,
  "Proasa Saúde": logoProasaSaude,
  "Procuradoria (Plan-Assiste)": logoPlanAssiste,
  "Pró-Social (TRF)": logoProSocialTrf,
  "TRE": logoTre,
  "TRT": logoTrt,
  "Unafisco": logoUnafisco,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const VP = { once: true, amount: 0.15 };

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL as string;
const WHATSAPP_NUMBER = '5591988968201';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllInsurances, setShowAllInsurances] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNome('');
    setTelefone('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim()) return;

    setIsSubmitting(true);

    const payload = {
      dataHora: new Date().toLocaleString('pt-BR', { timeZone: 'America/Belem' }),
      nome: nome.trim(),
      telefone: telefone.trim(),
      formulario: 'LP - Catarata',
    };

    try {
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch {
      // continua mesmo se o registro falhar
    } finally {
      setIsSubmitting(false);
      handleModalClose();
      const msg = encodeURIComponent(`Olá! Me chamo ${payload.nome} e gostaria de agendar uma consulta.`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen font-inter text-vl-text bg-[#f8fafc]">
      {/* Google Tag Manager */}
      <Script id="gtm-script-lp" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5ZGQKJJ4');`}
      </Script>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZGQKJJ4"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
      </noscript>

      {/* HEADER OVER HERO */}
      <div className="relative">
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0C4A6E]/80 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <img src={logoVisual} alt="Visual Laser" className="h-12 w-auto" />
            </div>

            <nav className="hidden lg:flex gap-8 text-white font-medium text-sm">
              <a href="#" className="hover:text-vl-cyan transition">Home</a>
              <a href="#clinica" className="hover:text-vl-cyan transition">Clínica</a>
              <a href="#sobre-catarata" className="hover:text-vl-cyan transition">Sobre a catarata</a>
              <a href="#onde-estamos" className="hover:text-vl-cyan transition">Onde Estamos</a>
              <a href="#faq" className="hover:text-vl-cyan transition">Dúvidas Frequentes</a>
            </nav>

            <div className="flex items-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1.5 md:gap-2 bg-vl-cyan text-white px-4 py-2 md:px-5 md:py-2.5 rounded-md text-xs md:text-sm font-semibold hover:bg-opacity-90 transition">
                <Calendar size={16} /> Agendar
              </button>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <img src={heroBg} className="w-full h-full object-cover" alt="Oftalmologia" />
            <div className="absolute inset-0 bg-[#163653]/60 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-2xl text-white text-center shadow-2xl"
            >
              <span className="text-white font-bold tracking-widest text-xs uppercase mb-4 block">CLÍNICA OFTALMOLÓGICA EM BELÉM DESDE 1997</span>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.1] mb-6">
                Enxergar com clareza é ter mais qualidade de vida
              </h1>
              <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                Atualmente o tratamento da catarata é um procedimento muito eficaz, pois o avanço da oftalmologia permite sua realização com segurança e precisão.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => setIsModalOpen(true)} className="bg-vl-cyan text-white px-8 py-3.5 rounded-md font-bold hover:bg-opacity-90 transition text-lg shadow-lg shadow-cyan-500/30">Agendar pelo WhatsApp</button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* STRIP CONVÊNIOS */}
      <div className="bg-white py-4 border-b border-gray-200 overflow-hidden flex items-center">
         <div className="max-w-[1400px] mx-auto px-6 flex items-center w-full relative">
            <div className="font-bold text-gray-700 uppercase tracking-wide text-xs md:text-sm whitespace-nowrap bg-white relative z-10 pr-4 shrink-0 hidden md:block shadow-[10px_0_10px_-5px_white]">
              Convênios aceitos:
            </div>
            <div className="flex flex-1 overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 2%, black 98%, transparent)' }}>
               <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-6 md:gap-8 items-center text-xs md:text-sm text-gray-500 font-medium px-4 whitespace-nowrap">
                       <span>Amazônia Saúde</span><span>·</span>
                       <span>Amil</span><span>·</span>
                       <span>Aspara</span><span>·</span>
                       <span>Assefaz</span><span>·</span>
                       <span>Bacen</span><span>·</span>
                       <span>Bradesco Saúde</span><span>·</span>
                       <span>Casembrapa</span><span>·</span>
                       <span>CASF</span><span>·</span>
                       <span>CASSI</span><span>·</span>
                       <span>CEF (Saúde Caixa)</span><span>·</span>
                       <span>Conab</span><span>·</span>
                       <span>Correios</span><span>·</span>
                       <span>Eletronorte</span><span>·</span>
                       <span>Embratel</span><span>·</span>
                       <span>Fusex</span><span>·</span>
                       <span>Garantia de Saúde</span><span>·</span>
                       <span>Infraero</span><span>·</span>
                       <span>Lider Saúde</span><span>·</span>
                       <span>Mediservice</span><span>·</span>
                       <span>Petrobras</span><span>·</span>
                       <span>Proasa Saúde</span><span>·</span>
                       <span>Procuradoria (Plan-Assiste)</span><span>·</span>
                       <span>Pró-Social (TRF)</span><span>·</span>
                       <span>SulAmérica</span><span>·</span>
                       <span>TRE</span><span>·</span>
                       <span>TRT</span><span>·</span>
                       <span>Unafisco</span><span>·</span>
                       <span>Unimed</span><span>·</span>
                       <span>Vale (PASA)</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* CONHEÇA A VISUAL LASER */}
      <section id="clinica" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
            <motion.div
              className="flex-1"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              <h2 className="text-[2.5rem] font-black mb-6 leading-tight">
                <span className="text-black">Referência em </span>
                <span className="bg-gradient-to-r from-[#0C4A6E] to-[#38BCED] text-transparent bg-clip-text">oftalmologia em Belém</span>
              </h2>

              {/* Mobile Image */}
              <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl">
                 <img src={empresaImg} alt="Fachada Clínica" className="w-full h-[250px] object-cover" />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                A Visual Laser realiza cirurgias de catarata com uma equipe oftalmológica especializada e equipamentos modernos, oferecendo atendimento seguro e individualizado a cada paciente.
              </p>

              <div className="space-y-4 mt-8">
                {[
                  "Equipe médica especializada e experiente",
                  "Tecnologia de última geração",
                  "Atendimento humanizado e personalizado",
                  "Infraestrutura completa e moderna"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i * 0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VP}
                    className="flex items-center gap-3 text-vl-blue font-medium"
                  >
                    <div className="w-2 h-2 rounded-full bg-vl-cyan"></div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block flex-1 relative w-full"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
               <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <img src={empresaImg} alt="Fachada Clínica" className="w-full h-[450px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
            </motion.div>
          </div>

          {/* Cards Numeros */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={28}/>, value: '50 mil+', label: 'Pacientes Atendidos' },
              { icon: <Award size={28}/>, value: '25+', label: 'Anos de Experiência' },
              { icon: <Stethoscope size={28}/>, value: '14', label: 'Médicos Especialistas' },
              { icon: <Heart size={28}/>, value: '30+', label: 'Convênios Aceitos' },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 bg-[#f0f6fa] text-vl-blue rounded-xl flex items-center justify-center mb-4">{card.icon}</div>
                <div className="text-3xl font-black text-vl-dark mb-1">{card.value}</div>
                <div className="text-sm font-bold text-gray-500">{card.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCE PRECISA SABER */}
      <section id="sobre-catarata" className="py-24 bg-[radial-gradient(circle,_#163960_0%,_#0C4A6E_100%)]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="text-white">Sobre a </span>
              <span className="text-[#38BCED]">Catarata</span>
            </h2>
            <p className="text-lg text-[#8baecf] max-w-3xl mx-auto">
              A catarata é a principal causa de cegueira reversível no mundo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Eye size={32} strokeWidth={1.5} />,
                title: 'O que é a Catarata?',
                desc: 'O opacamento progressivo do cristalino (lente natural do olho). Torna a visão turva, embaçada ou desbotada, sendo mais comum após os 60 anos, mas podendo ocorrer em qualquer idade.',
                listTitle: 'Sintomas mais comuns:',
                items: ['Visão turva ou embaçada', 'Sensibilidade à luz intensa', 'Necessidade frequente de trocar óculos'],
              },
              {
                icon: <Activity size={32} strokeWidth={1.5} />,
                title: 'Como é a Cirurgia?',
                desc: 'O único tratamento definitivo é a cirurgia. A facoemulsificação é um procedimento moderno, seguro e com anestesia local.',
                listTitle: 'Principais Etapas:',
                items: ['Avaliação Pré-Operatória (Exames)', 'Facoemulsificação (Ultrassom)', 'Implante de Lente Intraocular (LIO)', 'Acompanhamento Pós-Operatório'],
              },
              {
                icon: <CheckCircle2 size={32} strokeWidth={1.5} />,
                title: 'Tipos de Lentes Disponíveis',
                desc: 'A lente ideal é escolhida pelo médico especialista após avaliação criteriosa das suas necessidades.',
                listTitle: 'Opções:',
                items: ['Monofocal: Foco para uma distância.', 'Tórica: Corrige astigmatismo.', 'Multifocal: Visão em várias distâncias.'],
              },
              {
                icon: <Award size={32} strokeWidth={1.5} />,
                title: 'Tecnologia de Padrão Mundial',
                desc: 'Estrutura completa e segura com equipamentos das marcas Zeiss e Alcon, referências globais.',
                listTitle: 'Nossos diferenciais:',
                items: ['Biometria de Alta Precisão', 'Facoemulsificador Moderno', 'Centro Cirúrgico Próprio'],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                className="bg-[#1c4b73] border border-white/5 rounded-2xl p-10 hover:bg-[#205481] transition duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-vl-cyan">{card.icon}</div>
                  <h3 className="text-2xl font-black text-white">{card.title}</h3>
                </div>
                <p className="text-[#a0c2e3] mb-6 leading-relaxed">{card.desc}</p>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{card.listTitle}</h4>
                <ul className="text-[#a0c2e3] space-y-3 mb-8">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-vl-cyan rounded-full shrink-0 mt-2"></div>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }} />
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="text-vl-cyan font-medium flex items-center gap-2 hover:opacity-80">Saiba Mais</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CAPTURA */}
      <section className="py-16 bg-[#185382]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-10 md:p-14 shadow-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
             <h2 className="text-3xl md:text-4xl font-black mb-4">
               <span className="text-white">Agende agora sua </span>
               <span className="text-[#38BCED]">consulta</span>
             </h2>
             <p className="text-lg text-blue-100 mb-10">Entre em contato conosco e agende sua consulta agora mesmo. Nossa equipe está pronta para cuidar da sua saúde visual.</p>
             <button onClick={() => setIsModalOpen(true)} className="bg-vl-cyan text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition w-full md:w-auto shadow-lg shadow-cyan-500/20">Quero agendar minha consulta</button>
          </motion.div>
        </div>
      </section>

      {/* CONVÊNIOS ATENDIDOS GRID */}
      <section className="py-24 bg-[#f8fafc]">
         <motion.div
           className="text-center mb-16"
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={VP}
         >
            <h2 className="text-3xl font-black mb-4">
              <span className="text-black">Convênios </span>
              <span className="bg-gradient-to-r from-[#0C4A6E] to-[#38BCED] text-transparent bg-clip-text">Atendidos</span>
            </h2>
            <p className="text-gray-500">Trabalhamos com os principais planos de saúde para garantir o melhor atendimento.</p>
         </motion.div>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {(showAllInsurances ? [
              "Unimed", "Bradesco Saúde", "SulAmérica", "CASSI", "Petrobras",
              "Eletronorte", "Correios", "Amil", "Vale (PASA)", "Saúde Caixa",
              "Amazônia Saúde", "Aspara", "Assefaz", "Bacen", "Casembrapa",
              "CASF", "Conab", "Embratel", "Fusex", "Garantia de Saúde",
              "Infraero", "Lider Saúde", "Mediservice", "Proasa Saúde",
              "Procuradoria (Plan-Assiste)", "Pró-Social (TRF)", "TRE", "TRT", "Unafisco"
            ] : [
              "Unimed", "Bradesco Saúde", "SulAmérica", "CASSI", "Petrobras",
              "Eletronorte", "Correios", "Amil", "Vale (PASA)", "Saúde Caixa"
            ]).map((conv, i) => (
              <motion.div
                key={conv}
                variants={fadeUp}
                custom={i * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                className="bg-white border border-gray-100 rounded-xl py-5 px-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition min-h-[90px] gap-2"
              >
                {insuranceLogos[conv] && (
                  <img src={insuranceLogos[conv]} alt={conv} className="h-12 w-auto max-w-[110px] object-contain" />
                )}
                <div className="font-bold text-xs md:text-sm text-gray-700">{conv}</div>
              </motion.div>
            ))}
          </div>
         <div className="text-center mt-10">
           <button
             onClick={() => setShowAllInsurances(!showAllInsurances)}
             className="text-vl-cyan font-bold hover:underline"
           >
             {showAllInsurances ? 'Ocultar lista de convênios ↑' : 'Ver lista completa de convênios →'}
           </button>
         </div>
      </section>

      {/* INFRAESTRUTURA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <span className="text-vl-cyan font-bold tracking-widest text-xs uppercase mb-4 inline-block border border-vl-cyan/30 rounded-full px-4 py-1 bg-cyan-50">Infraestrutura</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-black">Tecnologia de </span>
              <span className="bg-gradient-to-r from-[#0C4A6E] to-[#38BCED] text-transparent bg-clip-text">padrão mundial</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Equipamentos das marcas Zeiss e Alcon, referências globais em oftalmologia, utilizados na avaliação e no procedimento cirúrgico.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Microscope size={28} strokeWidth={2} />, title: 'Biometria de Alta Precisão', desc: 'Cálculo exato da lente intraocular para cada paciente, garantindo o planejamento adequado do procedimento.' },
              { icon: <Zap size={28} strokeWidth={2} />, title: 'Facoemulsificador Moderno', desc: 'Equipamento de ultrassom de última geração para remoção segura e precisa do cristalino opaco.' },
              { icon: <Lightbulb size={28} strokeWidth={2} />, title: 'Centro Cirúrgico Próprio', desc: 'Estrutura completa para realização do procedimento com todo o suporte necessário, sem necessidade de internação.' },
              { icon: <Eye size={28} strokeWidth={2} />, title: 'Exames Diagnósticos Avançados', desc: 'Mais de 37 tipos de exames oftalmológicos para avaliação completa antes, durante e após o tratamento.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-[#f0f6fa] text-vl-blue rounded-xl flex items-center justify-center mb-6">{card.icon}</div>
                <h3 className="text-xl font-black text-vl-dark mb-4 leading-tight">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PSVL */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-stretch">
             <motion.div
               className="flex-1"
               variants={fadeLeft}
               initial="hidden"
               whileInView="visible"
               viewport={VP}
             >
                <span className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-4 block">Programa Solidário</span>
                <h2 className="text-4xl font-black mb-6">
                  <span className="text-black">PSVL - Programa </span>
                  <span className="bg-gradient-to-r from-[#0C4A6E] to-[#38BCED] text-transparent bg-clip-text">Solidário Visual Laser</span>
                </h2>

                {/* Mobile Image */}
                <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl">
                   <img src={psvlImg} alt="Programa Solidário" className="w-full object-contain" />
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                  O PSVL é um programa de inclusão criado pensando em atender a necessidade de pacientes que estão sem um plano de saúde suplementar conveniado com a clínica e desejam atendimento oftalmológico de qualidade.
                </p>
                <div className="space-y-4 mb-10">
                   {[
                     { title: 'Quais os benefícios do PSVL?', body: 'Pacientes podem realizar consultas, exames e procedimentos clínicos ou cirúrgicos com um valor diferenciado e acessível.' },
                     { title: 'Existe Taxa de Adesão?', body: 'Não há necessidade de pagar taxa de adesão ou mensalidades.' },
                     { title: 'Como fazer para participar?', body: 'Basta agendar sua consulta e no dia do atendimento apresentar o documento de identidade com foto.' },
                   ].map((item, i) => (
                     <motion.div
                       key={i}
                       variants={fadeUp}
                       custom={i * 0.1}
                       initial="hidden"
                       whileInView="visible"
                       viewport={VP}
                       className="border border-gray-200 rounded-xl p-6 bg-[#f8fafc]"
                     >
                       <h4 className="font-extrabold text-vl-dark mb-2">{item.title}</h4>
                       <p className="text-sm text-gray-600">{item.body}</p>
                     </motion.div>
                   ))}
                </div>
                <button onClick={() => setIsModalOpen(true)} className="bg-vl-cyan text-white px-8 py-3.5 rounded-md font-bold hover:bg-opacity-90 transition">Saiba Mais Sobre o PSVL</button>
             </motion.div>

             <motion.div
               className="hidden lg:block flex-1 w-full min-h-[300px]"
               variants={fadeRight}
               initial="hidden"
               whileInView="visible"
               viewport={VP}
             >
                <img src={psvlImg} alt="Programa Solidário" className="rounded-2xl shadow-xl w-full h-full object-cover" />
             </motion.div>
           </div>

           <motion.div
             className="mt-20 bg-[#163653] rounded-2xl p-12 text-center text-white"
             variants={fadeUp}
             initial="hidden"
             whileInView="visible"
             viewport={VP}
           >
              <h3 className="text-2xl font-black mb-6">Quem pode participar do PSVL?</h3>
              <ul className="text-blue-200 space-y-2 mb-8 max-w-2xl mx-auto font-medium">
                <li>• Pacientes que possuem um plano de saúde suplementar não conveniado</li>
                <li>• Pacientes que já tiveram um plano de saúde suplementar conveniado</li>
                <li>• Pacientes particulares sem plano de assistência</li>
              </ul>
              <button onClick={() => setIsModalOpen(true)} className="bg-vl-cyan text-white px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition">Saiba Mais</button>
           </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-[radial-gradient(circle,_#163960_0%,_#0C4A6E_100%)]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
           <motion.div
             variants={fadeUp}
             initial="hidden"
             whileInView="visible"
             viewport={VP}
           >
             <h2 className="text-4xl font-black mb-4">
               <span className="text-white">O que Nossos </span>
               <span className="text-[#38BCED]">Pacientes Dizem</span>
             </h2>
             <div className="flex justify-center items-center gap-2 text-[#facc15] mb-2">
                {"★★★★★".split("").map((star,i) => <span key={i}>{star}</span>)}
                <span className="text-white font-bold ml-2">5.0</span>
                <span className="text-[#8baecf] text-sm ml-2">• avaliações verificadas no Google</span>
             </div>
             <p className="text-[#a0c2e3] mb-16 mt-4 max-w-2xl mx-auto">A satisfação dos nossos pacientes é nossa maior recompensa. Conheça alguns depoimentos reais de quem confiou na Visual Laser.</p>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-6">
             {[
               { n: "Maria Aparecida S.", t: "Fui operada de catarata pelo Dr. Roberto e fiquei muito satisfeita com o atendimento. Toda a equipe foi atenciosa, explicou cada passo..." },
               { n: "Ricardo C.", t: "Meu pai passou pela cirurgia de catarata na Visual Laser e ficamos muito tranquilos com toda a condução. Clínica moderna e médicos competentes." },
               { n: "Francisca O.", t: "Atendimento excelente desde o agendamento até o retorno pós-operatório. A equipe esclareceu todas as dúvidas sobre a catarata." }
             ].map((dep, i) => (
               <motion.div
                 key={i}
                 variants={fadeUp}
                 custom={i * 0.15}
                 initial="hidden"
                 whileInView="visible"
                 viewport={VP}
                 className="bg-[#1c4b73] p-8 rounded-2xl text-left border border-white/5"
               >
                 <div className="text-[#facc15] mb-4 text-sm">★★★★★</div>
                 <p className="text-[#a0c2e3] mb-8 leading-relaxed">&quot;{dep.t}&quot;</p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-[#28608e] rounded-full flex items-center justify-center text-white font-bold">{dep.n.charAt(0)}</div>
                   <div>
                     <div className="text-white font-bold text-sm">{dep.n}</div>
                     <div className="text-[#8baecf] text-xs">Paciente verificado</div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* JUNTE-SE */}
        <div className="max-w-[1400px] mx-auto px-6 mt-16 pb-24">
          <motion.div
            className="bg-[#1c4b73] border border-white/10 rounded-2xl p-12 text-center shadow-2xl relative z-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
             <h2 className="text-3xl font-black mb-4">
               <span className="text-white">Junte-se aos Nossos </span>
               <span className="text-[#38BCED]">Pacientes Satisfeitos</span>
             </h2>
             <p className="text-[#a0c2e3] mb-8 max-w-xl mx-auto">Agende sua consulta e descubra por que tantas pessoas confiam na Visual Laser para cuidar da sua saúde visual.</p>
             <button onClick={() => setIsModalOpen(true)} className="bg-vl-cyan text-white px-8 py-3.5 rounded-md font-bold hover:bg-opacity-90 transition">Agendar Consulta</button>
          </motion.div>
        </div>
      </section>

      {/* ONDE ESTAMOS */}
      <section id="onde-estamos" className="pt-24 pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <span className="text-vl-cyan font-bold tracking-widest text-xs uppercase mb-4 inline-block border border-vl-cyan/30 rounded-full px-4 py-1 bg-cyan-50">Onde Estamos</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-black">Fácil acesso no </span>
              <span className="bg-gradient-to-r from-[#0C4A6E] to-[#38BCED] text-transparent bg-clip-text">coração de Belém</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Localizada no bairro Nazaré, uma das regiões mais centrais e acessíveis de Belém do Pará.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 px-4">
            {[
              { icon: <MapPin size={24} strokeWidth={2} />, title: 'Endereço', content: <p className="text-gray-500 leading-relaxed text-sm">Trav. 14 de Março, 1622 · Nazaré<br/>Belém/PA · CEP 66035-180</p> },
              { icon: <Clock size={24} strokeWidth={2} />, title: 'Horário', content: <p className="text-gray-500 leading-relaxed text-sm">Segunda a Quinta: 8h às 18h<br/>Sexta: 8h às 17h</p> },
              { icon: <Phone size={24} strokeWidth={2} />, title: 'Telefones', content: <><p className="font-bold text-gray-600 mt-1 text-sm md:text-base">(91) 3225-4422</p></> },
              { icon: <MessageCircle size={24} strokeWidth={2} />, title: 'WhatsApp', content: <p className="font-bold text-gray-600 mt-1 text-sm md:text-base">(91) 98896-8201</p> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#f0f6fa] text-vl-blue rounded-xl flex items-center justify-center shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-vl-dark text-lg mb-1">{item.title}</h4>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mapa Full Width */}
        <motion.div
          className="w-full h-[400px] md:h-[500px] relative mt-12 bg-gray-100"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
        >
          <iframe
            src="https://maps.google.com/maps?q=Trav.+14+de+Mar%C3%A7o,+1622+-+Nazar%C3%A9,+Bel%C3%A9m+-+PA&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-0"
            title="Localização Visual Laser"
          ></iframe>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <span className="text-vl-cyan font-bold tracking-widest text-xs uppercase mb-2 border border-vl-cyan/30 rounded-full px-4 py-1 inline-block bg-cyan-50">Dúvidas Frequentes</span>
            <h2 className="text-4xl font-black mb-6">
              <span className="text-black">Perguntas </span>
              <span className="bg-gradient-to-r from-[#0C4A6E] to-[#38BCED] text-transparent bg-clip-text">Frequentes</span>
            </h2>
            <p className="text-gray-500">Tudo o que você precisa saber sobre nossos atendimentos, convênios e tecnologia.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "A catarata tem cura? Qual é o tratamento?",
                a: "O tratamento definitivo da catarata é cirúrgico. Colírios e óculos podem ajudar a amenizar sintomas em estágios iniciais, mas não revertem o opacamento do cristalino. A cirurgia de facoemulsificação é o procedimento indicado e amplamente consolidado na oftalmologia moderna."
              },
              {
                q: "A cirurgia de catarata é dolorosa?",
                a: "O procedimento é realizado com anestesia local e sedação, o que torna a experiência confortável para o paciente. A duração costuma ser curta — em torno de 15 a 30 minutos por olho. Após a cirurgia, pode haver leve desconforto nos primeiros dias, o que é esperado e monitorado pela equipe médica."
              },
              {
                q: "Qual é o tempo de recuperação após a cirurgia?",
                a: "A recuperação varia de pessoa para pessoa. Em geral, muitos pacientes já percebem melhora visual nas primeiras 24 a 48 horas. O retorno às atividades cotidianas costuma ocorrer em poucos dias, mas o acompanhamento pós-operatório completo pode se estender por semanas. O médico responsável orientará cada paciente de forma individualizada."
              },
              {
                q: "A cirurgia de catarata é coberta pelo convênio?",
                a: "Na maioria dos casos, sim. A cirurgia de catarata por facoemulsificação com lente monofocal é coberta pelos principais planos de saúde. A Visual Laser aceita mais de 30 convênios, incluindo Unimed, Bradesco Saúde, SulAmérica, Amil, CASSI e outros. Para lentes premium ou multifocais, pode haver coparticipação. Nossa equipe verifica a cobertura do seu plano no momento do agendamento."
              },
              {
                q: "Com qual idade a catarata costuma aparecer?",
                a: "A catarata é mais frequente a partir dos 60 anos, sendo chamada de catarata senil. No entanto, pode surgir em qualquer faixa etária — inclusive em recém-nascidos (catarata congênita) ou em adultos jovens como consequência de traumas, doenças sistêmicas (como diabetes), uso prolongado de corticoides ou exposição intensa à radiação ultravioleta."
              },
              {
                q: "Posso desenvolver catarata em ambos os olhos?",
                a: "Sim. A catarata pode se desenvolver nos dois olhos, mas raramente progride na mesma velocidade. É comum que um olho seja mais afetado que o outro. A cirurgia é realizada em um olho de cada vez, com intervalos definidos pelo médico responsável pelo caso."
              },
              {
                q: "O que é a \"catarata secundária\" e como ela é tratada?",
                a: "A catarata secundária (ou posterior) é um opacamento da cápsula que envolve a lente implantada, podendo surgir meses ou anos após a cirurgia. Não é uma nova catarata, mas uma complicação possível. O tratamento é feito com laser YAG — um procedimento ambulatorial, rápido e indolor, disponível na Visual Laser."
              },
              {
                q: "Preciso levar algum documento para a consulta?",
                a: "Para a consulta inicial, recomendamos trazer RG, CPF, carteirinha do convênio (se aplicável) e, se tiver, laudos ou exames oftalmológicos anteriores. Nossa equipe de agendamento orienta sobre qualquer documentação adicional no momento da marcação."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={VP}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-5 text-left font-extrabold text-vl-dark flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(i)}
                >
                  {faq.q}
                  <ChevronDown className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''} text-vl-cyan`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
          >
            <p className="text-gray-500 mb-2">Ainda tem dúvidas?</p>
            <button onClick={() => setIsModalOpen(true)} className="text-vl-cyan font-bold text-lg hover:underline">Fale com nossa equipe pelo WhatsApp</button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#163653] text-white pt-20 pb-8 border-t-[8px] border-vl-cyan">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           {[
             <div key="brand">
               <div className="flex mb-6">
                  <img src={logoVisual} alt="Visual Laser" className="h-20 w-auto" />
               </div>
               <p className="text-[#8baecf] text-sm leading-relaxed mb-6">
                 Há quase 30 anos somos referência em oftalmologia avançada na região Norte.
               </p>
               <div className="flex gap-4">
                 <a href="https://www.facebook.com/VisualLaserOftalmologia" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vl-cyan transition"><Facebook size={18}/></a>
                 <a href="https://www.instagram.com/visuallaser" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vl-cyan transition"><Instagram size={18}/></a>
                 <a href="https://www.youtube.com/@visuallaser" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vl-cyan transition"><Youtube size={18}/></a>
               </div>
             </div>,
             <div key="services">
               <h4 className="font-extrabold text-lg mb-6 text-vl-cyan">Responsável Técnico</h4>
               <ul className="space-y-3 text-[#8baecf] text-sm font-medium">
                 <li>Dr. Roberto Carlei Costa Lima</li>
                 <li>CRM/PA 5071</li>
                 <li>RQE 6500</li>
               </ul>
             </div>,
             <div key="contact">
               <h4 className="font-extrabold text-lg mb-6 text-vl-cyan">Entre em Contato</h4>
               <ul className="space-y-4 text-[#8baecf] text-sm">
                 <li className="flex items-center gap-3"><Phone size={18} className="text-vl-cyan"/> (91) 3225-4422</li>
                 <li className="flex items-center gap-3"><Mail size={18} className="text-vl-cyan"/> contato@visuallaser.med.br</li>
                 <li className="flex items-start gap-3"><Clock size={18} className="text-vl-cyan shrink-0 mt-1"/> <div>Seg a Qui: 8h às 18h<br/>Sex: 8h às 17h</div></li>
               </ul>
             </div>,
             <div key="location">
               <h4 className="font-extrabold text-lg mb-6 text-vl-cyan">Nossa Localização</h4>
               <p className="text-[#8baecf] text-sm flex items-start gap-3 mb-4">
                 <MapPin size={18} className="text-vl-cyan shrink-0 mt-1"/>
                 Trav. 14 de Março, 1622 - Nazaré<br/>Belém/PA - CEP 66035-180
               </p>
             </div>,
           ].map((col, i) => (
             <motion.div
               key={i}
               variants={fadeUp}
               custom={i * 0.1}
               initial="hidden"
               whileInView="visible"
               viewport={VP}
             >
               {col}
             </motion.div>
           ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8baecf]">
          <div>© 2026 Visual Laser Clínica e Cirurgia Oftalmológica. Todos os direitos reservados.</div>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white">Política de Privacidade</a>
             <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* POPUP FORMULÁRIO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0C4A6E]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
          >
            <button
              onClick={handleModalClose}
              title="Fechar Modal"
              aria-label="Fechar Modal"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-black text-center mb-2">
              <span className="text-vl-dark">O Atendimento foi </span>
              <span className="text-vl-cyan">iniciado</span>
            </h3>

            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></div>
              <span className="text-gray-500 text-sm font-medium">ONLINE AGORA | Equipe Visual Laser</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-vl-dark font-bold mb-2">Nome: <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 text-vl-dark placeholder:text-gray-400 focus:outline-none focus:border-vl-cyan focus:ring-1 focus:ring-vl-cyan transition"
                />
              </div>

              <div>
                <label className="block text-vl-dark font-bold mb-2">Telefone com DDD: <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  required
                  placeholder="(99) 99999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 text-vl-dark placeholder:text-gray-400 focus:outline-none focus:border-vl-cyan focus:ring-1 focus:ring-vl-cyan transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-60 text-white py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition mt-4 shadow-lg shadow-green-500/20 cursor-pointer"
              >
                <MessageCircle size={24} />
                {isSubmitting ? 'Aguarde...' : 'Prosseguir pelo Whatsapp'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
