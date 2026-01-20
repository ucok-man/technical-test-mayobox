import Badge from "@/components/badge";
import GradientText from "@/components/gradient-text";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import FaqContent from "./faq-content";

// const FAQ_ITEMS = Array.from({ length: 5 }, (_, idx) => ({
//   question: "Berapa lama waktu pengiriman robux",
//   answer: [
//     {
//       short: "Robux melalui link (Gamepass)",
//       long: "Cara ini membutuhkan waktu sekitar 5 hari hingga Robux masuk ke akun kamu. Jadi, harap sabar menunggu, ya!",
//     },
//     {
//       short: "Robux melalui login (menggunakan username dan password):",
//       long: "Kalau pilih cara ini, Robux akan masuk ke akun kamu dalam waktu sekitar 3–5 jam. Prosesnya lebih cepat, tapi kamu perlu memberikan informasi login.",
//     },
//   ],
//   displayOrder: idx,
// }));

export default function SectionFAQ() {
  return (
    <section>
      <MaxWidthWrapper className="grid xl:grid-cols-2 gap-16 transition-all duration-200">
        <div className="w-full space-y-6">
          <header className="flex flex-col items-start justify-start gap-3">
            <Badge>Frequently Ask Question (FAQ)</Badge>

            <GradientText className="text-4xl md:text-5xl text-left leading-[115%]">
              Kumpulan pertanyaan paling sering ditanyakan oleh pengguna kami.
            </GradientText>
          </header>

          <FaqContent />
        </div>

        <div className="relative w-full h-full max-h-[660px] overflow-hidden rounded-4xl hidden xl:block">
          <Image
            src="/mayo-faq.png"
            alt=""
            width={1600}
            height={1570}
            className="absolute inset-0 object-cover object-center size-full"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
