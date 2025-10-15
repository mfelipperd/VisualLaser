// Lista completa de exames e procedimentos realizados pela Visual Laser
// Atualizado em: Outubro 2025

export interface ExameProcedimento {
  nome: string;
  descricao?: string;
}

export interface CategoriaExames {
  categoria: string;
  slug: string;
  icon?: string;
  exames: ExameProcedimento[];
}

export const examesBasicos: ExameProcedimento[] = [
  { nome: "Exame de Acuidade Visual" },
  { nome: "Refratometria para prescrição de óculos e lentes de contato" },
  { nome: "Ceratometria" },
  { nome: "Tonometria de aplanação e de rebote (Medida da Pressão)" },
  { nome: "Teste de Ishihara (Visão de Cores)" },
  { nome: "Motilidade Ocular Extrínseca (Desvios Oculares)" },
];

export const examesCornea: ExameProcedimento[] = [
  { nome: "Ceratoscopia ou Topografia computadorizada de córnea" },
  { nome: "Paquimetria ultrassônica de córnea" },
  { nome: "Mapa paquimétrico óptico" },
  { nome: "Tomografia de coerência óptica de córnea" },
  { nome: "Tomografia do ângulo camerular (OCT de segmento anterior)" },
  { nome: "Microscopia especular de córnea" },
  { nome: "Teste de adaptação de lentes de contato" },
];

export const examesRetina: ExameProcedimento[] = [
  { nome: "Mapeamento de retina" },
  { nome: "Biomicroscopia de fundo" },
  { nome: "Retinografia simples" },
  { nome: "Autofluorescência" },
  { nome: "Angiografia fluorescente ou Angiofluoresceionografia" },
  { nome: "Tomografia de coerência óptica da retina e nervo óptico (OCT segmento posterior)" },
  { nome: "Angiotomografia (Angio-OCT)" },
  { nome: "Ultrassonografia ocular" },
];

export const examesGlaucoma: ExameProcedimento[] = [
  { nome: "Campimetria visual computadorizada" },
  { nome: "Gonioscopia" },
  { nome: "Teste de sobrecarga hídrica (provocativo de glaucoma)" },
  { nome: "Curva tensional diária" },
];

export const examesSuperficieOcular: ExameProcedimento[] = [
  { nome: "Avaliação de vias lacrimais" },
  { nome: "Estudo da película lacrimal" },
  { nome: "Teste de Schirmer (análise da produção lacrimal)" },
  { nome: "Teste de Lissamina Verde (análise de células caliciformes e apoptose)" },
  { nome: "Teste de Rosa Bengala (análise de apoptose celular)" },
  { nome: "Meibografia (Registro das glândulas de Meibomius com infravermelho)" },
  { nome: "Blink Time Test (medição de tempo do piscar)" },
  { nome: "Break-Up Time Test (medição do tempo de rotura do filme lacrimal)" },
];

export const examesEspecializados: ExameProcedimento[] = [
  { nome: "Aberrometria ocular por Raytracing (Análise da qualidade visual)" },
  { nome: "Pupilometria Digital (Fotópica, Mesópica e Escotópica)" },
  { nome: "Biometria ultrassônica" },
  { nome: "Biometria óptica por OCT SS" },
];

export const cirurgiasProcedimentos: ExameProcedimento[] = [
  { nome: "Capsulotomia posterior com YAG Laser" },
  { nome: "Iridotomia com YAG Laser" },
  { nome: "Vitreólise com YAG Laser" },
  { nome: "Retirada de corpo estranho da córnea e superfície ocular" },
  { nome: "Retirada de corpo estranho do segmento anterior" },
  { nome: "Sutura de córnea" },
  { nome: "Facoemulsificação com Implante de lente intraocular (Cirurgia de catarata)" },
  { nome: "Exérese de Pterígio / tumor conjuntival com transplante autólogo de conjuntiva (Cirurgia de carne crescida)" },
  { nome: "Iridectomia cirúrgica (Cirurgia de glaucoma)" },
  { nome: "Trabeculectomia (Cirurgia de glaucoma)" },
  { nome: "Ciclofotocoagulação com laser micropulsado (Cirurgia de glaucoma)" },
  { nome: "Blefaroplastia (Cirurgia de pálpebra)" },
  { nome: "Fotocoagulação a laser na retina" },
  { nome: "Termofotocoagulação Transpupilar com laser (TTT)" },
  { nome: "Transplante Penetrante de córnea" },
  { nome: "Ceratectomia fotoablativa com excimer laser (Cirurgia refrativa – PRK)" },
  { nome: "Crosslinking Corneano (CXL)" },
  { nome: "Tratamento ocular quimioterápico com antiangiogênico" },
  { nome: "Implante de lente intraocular fácica" },
  { nome: "Exérese de tumor palpebral / calázio" },
  { nome: "Cirurgia de Ptose palpebral" },
  { nome: "Harmonização Facial (com Botox e preenchedor facial)" },
];

// Todas as categorias organizadas
export const todasCategorias: CategoriaExames[] = [
  {
    categoria: "Exames Básicos",
    slug: "exames-basicos",
    icon: "Eye",
    exames: examesBasicos,
  },
  {
    categoria: "Exames de Córnea",
    slug: "exames-cornea",
    icon: "Focus",
    exames: examesCornea,
  },
  {
    categoria: "Exames de Retina",
    slug: "exames-retina",
    icon: "Scan",
    exames: examesRetina,
  },
  {
    categoria: "Exames de Glaucoma",
    slug: "exames-glaucoma",
    icon: "Activity",
    exames: examesGlaucoma,
  },
  {
    categoria: "Exames de Superfície Ocular",
    slug: "exames-superficie-ocular",
    icon: "Droplet",
    exames: examesSuperficieOcular,
  },
  {
    categoria: "Exames Especializados",
    slug: "exames-especializados",
    icon: "Microscope",
    exames: examesEspecializados,
  },
  {
    categoria: "Cirurgias e Procedimentos",
    slug: "cirurgias-procedimentos",
    icon: "Zap",
    exames: cirurgiasProcedimentos,
  },
];

// Total de exames e procedimentos
export const totalExamesProcedimentos = 
  examesBasicos.length +
  examesCornea.length +
  examesRetina.length +
  examesGlaucoma.length +
  examesSuperficieOcular.length +
  examesEspecializados.length +
  cirurgiasProcedimentos.length;

// Exportação para uso direto
export default todasCategorias;

