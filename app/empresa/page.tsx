import CompanyHero from "@/components/empresa/CompanyHero";
import CompanyVideo from "@/components/empresa/CompanyVideo";
import CompanyHistory from "@/components/empresa/CompanyHistory";
import Technology from "@/components/empresa/Technology";
import MedicalTeam from "@/components/empresa/MedicalTeam";
import CompanyValues from "@/components/empresa/CompanyValues";
import ContactCTA from "@/components/empresa/ContactCTA";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen">
      <CompanyHero />
      <CompanyVideo />
      <CompanyHistory />
      <Technology />
      <MedicalTeam />
      <CompanyValues />
      <ContactCTA />
    </main>
  );
}
