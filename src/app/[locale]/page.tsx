import { useTranslations } from "next-intl";
import Image from "next/image";
import MarqueeSection from "./_components/ui/marquee";
export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative min-h-screen ">
      <div className="HeroSection mx-8">
        {/* Wrapper untuk gambar */}
        <div className="absolute inset-0 -z-10 flex justify-center items-start mt-60">
          <Image
            src="/assets/bg.png"
            alt="hero"
            width={1250}
            height={1000}
            className="object-contain" 
          />
        </div>

        {/* Konten teks */}
        <div className="relative z-10 pt-[90px] flex justify-center flex-col">
          <p className="text-white text-[200px] font-secondary font-light text-center leading-[188px]">
            {t("HeroSection")}
          </p>
          <div className="pt-[90px] items-center justify-center flex">
            <button className="text-blue-500 text-[32px] font-main font-medium text-center bg-white rounded-full py-2 px-8 hover:bg-blue-600 hover:text-white transition duration-300">
              {t("Button")}
            </button>
          </div>
        </div>
      </div>

      <div className="runningText mt-[90px]">
       <MarqueeSection />
      </div>
    </div>
  );
}
