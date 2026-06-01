import { homepageData } from "@/content/homepage";
import { Hero } from "@/components/sections/Hero";
import { TrustBlock } from "@/components/sections/TrustBlock";
import { CaseCarousel } from "@/components/sections/CaseCarousel";
import { TextMarquee } from "@/components/sections/TextMarquee";
import { PortfolioEditorial } from "@/components/sections/PortfolioEditorial";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { ProcessBento } from "@/components/sections/ProcessBento";
import { CompareTiers } from "@/components/sections/CompareTiers";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  const d = homepageData;
  return (
    <>
      <Hero
        data={d.hero}
        marqueeLabel={d.logoMarquee.label}
        marqueeLogos={d.logoMarquee.logos}
      />
      <TrustBlock data={d.trust} />
      <CaseCarousel data={d.caseCarousel} />
      <TextMarquee phrases={d.textMarquee} />
      <PortfolioEditorial data={d.portfolio} />
      <ServicesTabs data={d.services} />
      <ProcessBento data={d.process} />
      <CompareTiers data={d.compare} />
      <Testimonials data={d.testimonials} />
      <FAQ data={d.faq} />
      <FinalCTA data={d.finalCta} />
    </>
  );
}
