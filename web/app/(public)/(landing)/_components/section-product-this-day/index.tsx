"use client";

import AutoSwiper from "@/components/auto-swipper";
import Badge from "@/components/badge";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import "swiper/css/bundle";
import ProductCard from "./product-card";

const PRODUCT_THIS_DAY_ITEMS = Array.from({ length: 10 }, () => ({
  icon: "/product-this-day/sky-pople.png",
  label: "Search & Rescue",
  price: "R$ 850",
}));

export default function SectionProductThisDay() {
  return (
    <section className="space-y-8">
      <MaxWidthWrapper>
        <header className="flex flex-col items-center justify-center gap-4">
          <Badge>Tentang Mayoblox</Badge>
          <h3 className="font-cherry-bomb text-[40px] leading-[120%] text-transparent bg-clip-text bg-brand-gradient-primary">
            Product of the Day
          </h3>
        </header>
      </MaxWidthWrapper>

      <AutoSwiper
        items={PRODUCT_THIS_DAY_ITEMS}
        renderItem={(product) => (
          <ProductCard
            icon={product.icon}
            label={product.label}
            price={product.price}
          />
        )}
      />
    </section>
  );
}
