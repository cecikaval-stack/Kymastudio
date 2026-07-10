import { Hero } from "@/components/home/Hero";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { Philosophy } from "@/components/home/Philosophy";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <ProcessPreview />
      <Philosophy />
      <CTA />
    </>
  );
}
