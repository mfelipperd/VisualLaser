export interface Convenio {
  name: string;
  slug: string;
  logo: string | null;
  exception?: string;
}

export const convenios: Convenio[] = [
  { name: "Amazônia Saúde", slug: "amazonia-saude", logo: "/images/convenios/amazonia_saude.png" },
  { name: "Amil", slug: "amil", logo: "/images/convenios/amil.svg" },
  { name: "Aspara", slug: "aspara", logo: "/images/convenios/aspara.png" },
  { name: "Assefaz", slug: "assefaz", logo: "/images/convenios/assefaz.svg" },
  { name: "Bacen", slug: "bacen", logo: "/images/convenios/bacen.png" },
  { name: "Bradesco Saúde", slug: "bradesco-saude", logo: "/images/convenios/bradesco.png" },
  { name: "Casembrapa", slug: "casembrapa", logo: "/images/convenios/casembrapa.png" },
  { name: "CASF", slug: "casf", logo: null },
  { name: "CASSI", slug: "cassi", logo: "/images/convenios/cassi.webp" },
  { name: "CEF (Saúde Caixa)", slug: "saude-caixa", logo: null },
  { name: "Conab", slug: "conab", logo: null },
  { name: "Correios", slug: "correios", logo: "/images/convenios/correios.png" },
  { name: "Eletronorte", slug: "eletronorte", logo: "/images/convenios/eletronorte_new.png" },
  { name: "Embratel", slug: "embratel", logo: null },
  { name: "Fusex", slug: "fusex", logo: null },
  { name: "Garantia de Saúde", slug: "garantia-de-saude", logo: null },
  { name: "Infraero", slug: "infraero", logo: null },
  { name: "Lider Saúde", slug: "lider-saude", logo: null },
  { name: "Mediservice", slug: "mediservice", logo: null },
  { name: "Petrobras", slug: "petrobras", logo: "/images/convenios/petrobras.svg" },
  { name: "Proasa Saúde", slug: "proasa-saude", logo: null },
  { name: "Procuradoria (Plan-Assiste)", slug: "plan-assiste", logo: null },
  { name: "Pró-Social (TRF)", slug: "pro-social-trf", logo: null },
  { name: "SulAmérica", slug: "sulamerica", logo: null },
  { name: "TRE", slug: "tre", logo: null },
  { name: "TRT", slug: "trt", logo: null },
  { name: "Unafisco", slug: "unafisco", logo: null },
  { 
    name: "Unimed", 
    slug: "unimed", 
    logo: "/images/convenios/unimed.svg",
    exception: "Exceto Dra. Rosamélia Lima, Dra. Tais Rocha e Dr. Joacy David"
  },
  { name: "Vale (PASA)", slug: "vale-pasa", logo: null }
];

export default convenios;
