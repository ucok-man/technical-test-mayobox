import SectionHero from "./_components/section-hero";
import SectionProductThisDay from "./_components/section-product-this-day";

export default function HomePage() {
  return (
    <div className="space-y-40">
      <SectionHero />
      <SectionProductThisDay />
    </div>
  );
}
