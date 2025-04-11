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
            quality={100}
            priority
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
      <div className="ContentWrapper bg-white w-full  h-screen rounded-t-[70px] mt-[56px]">
      <div className="WhyUs mx-12  flex flex-col md:flex-row pt-[125px] justify-center items-center gap-[48px]">
        <div className="ImageWrapper md:w-1/2">
          {/* <Image
            src="/assets/why-us-section.png"
            alt="why us"
            width={622}
            height={400}
            style={{ objectFit: "cover", width: "100%", height: "105px" }}
          /> */}
          <img
            src="/assets/why-us-section.png"
            alt="why us"
            className="object-cover w-full"
          />
        </div>
        <div className="TextWrapper w-1/2 flex flex-col">
            <h1 className="font-bold text-[32px] text-[var(--font-color)] font-main">{t("WhyChooseUs.Title")}<br/>Academy?</h1>
            <div className="contentWrapper pt-4 ">
              <div className="flex items-center gap-4 py-2">
              <div className="bg-blue-500 p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <p className="text-white font-medium text-[20px] font-main">1</p>
              </div>
                <p className="text-[var(--font-color)] font-medium font-main text-xl">{t("WhyChooseUs.why-one")}</p>
              </div>
              <div className="flex items-center gap-4 py-2">
              <div className="bg-blue-500 p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <p className="text-white font-medium text-[20px] font-main">2</p>
              </div>
                <p className="text-[var(--font-color)] font-medium font-main text-xl">{t("WhyChooseUs.why-two")}</p>
              </div>
              <div className="flex items-center gap-4 py-2">
              <div className="bg-blue-500 p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <p className="text-white font-medium text-[20px] font-main">3</p>
              </div>
                <p className="text-[var(--font-color)] font-medium font-main text-xl">{t("WhyChooseUs.why-three")}</p>
              </div>
              <div className="flex items-center gap-4 py-2">
              <div className="bg-blue-500 p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <p className="text-white font-medium text-[20px] font-main">4</p>
              </div>
                <p className="text-[var(--font-color)] font-medium font-main text-xl">{t("WhyChooseUs.why-four")}</p>
              </div>
              <div className="flex items-center gap-4 py-2">
              <div className="bg-blue-500 p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                <p className="text-white font-medium text-[20px] font-main">5</p>
              </div>
                <p className="text-[var(--font-color)] font-medium font-main text-xl">{t("WhyChooseUs.why-five")}</p>
              </div>
              <button className="bg-blue-500 rounded-full py-3 px-8 mt-4 hover:bg-blue-600 transition duration-300">
                <p className="text-white font-medium text-xl font-main">{t("WhyChooseUs.CTA")}</p>
              </button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
