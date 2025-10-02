import {
  TrackingPixels,
  LandingHeader,
  LandingHero,
  LandingBenefits,
  LandingStats,
  LandingTestimonials,
  LandingForm,
  LandingFAQ,
  LandingFooter
} from "@/components/landing-page";

export default function LandingPage() {
  return (
    <>
      <TrackingPixels />
      <LandingHeader />
      <main className="min-h-screen">
        <LandingHero />
        <LandingBenefits />
        <LandingStats />
        <LandingTestimonials />
        <LandingForm />
        <LandingFAQ />
        <LandingFooter />
      </main>
    </>
  );
}
