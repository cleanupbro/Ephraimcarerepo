import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TrustSignals } from "@/components/sections/trust-signals";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AboutPreview } from "@/components/sections/about-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTABanner } from "@/components/sections/cta-banner";
import { FAQ } from "@/components/sections/faq";
import { GoogleReviews } from "@/components/sections/google-reviews";
import { ServiceQuiz } from "@/components/sections/service-quiz";
import { NDISCalculator } from "@/components/sections/ndis-calculator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <ServicesGrid />
      <HowItWorks />
      <ServiceQuiz />
      <AboutPreview />
      <Testimonials />
      <GoogleReviews />
      <FAQ />
      <NDISCalculator />
      <CTABanner />
    </>
  );
}
