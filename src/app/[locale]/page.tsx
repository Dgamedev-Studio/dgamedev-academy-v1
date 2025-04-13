'use client'

import { useTranslations } from "next-intl";
import Image from "next/image";
import MarqueeSection from "./_components/ui/marquee";
import {useState} from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const [selectedLevelId, setSelectedLevelId] = useState(1); // 1 = Semua Level

  const levels = [
    { id: 1, label: t("Course.Level.All") },
    { id: 2, label: t("Course.Level.Junior") },
    { id: 3, label: t("Course.Level.Middle") },
    { id: 4, label: t("Course.Level.Senior") },
  ];

  return (
    <div className="relative min-h-screen ">
      <div className="HeroSection mx-1 md:mx-8">
        {/* Wrapper untuk gambar */}
        {/* <div className="absolute inset-0 -z-10 flex justify-center items-start mt-60">
          <Image
            src="/assets/bg.png"
            alt="hero"
            width={1250}
            height={1000}
            className="object-contain" 
            quality={100}
            priority
          />
        </div> */}
        {/* Wrapper untuk gambar - fixed for consistent display across screen sizes */}
        <div className="absolute inset-0 -z-10 flex justify-center items-start overflow-hidden">
          <div className="w-full h-full fixed-position">
            <Image
              src="/assets/bg.png"
              alt="hero"
              width={1250}
              height={1000}
              className="mx-auto mt-90 sm:mt-60 md:mt-60"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* Konten teks */}
        <div className="relative z-10 pt-34 md:pt-[200px] flex justify-center  flex-col">
          <p className="text-white text-8xl md:text-[200px] font-secondary font-light text-center leading-[100px] md:leading-[188px]">
            {t("HeroSection")}
          </p>
          <div className="pt-8 md:pt-[90px] items-center justify-center flex">
            <button className="text-blue-500 text-lg md:text-[32px] font-main font-medium text-center bg-white rounded-full py-2 px-8 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
              {t("Button")}
            </button>
          </div>
        </div>
      </div>
      <div className="runningText mt-12 md:mt-[90px]">
        <MarqueeSection />
      </div>
      <div className="ContentWrapper bg-[#F5F6FB] w-full rounded-t-3xl md:rounded-t-4xl  mt-4 md:mt-[56px] p-2 md:p-8">
        <div className="WhyUs mx-4 md:mx-12  flex flex-col md:flex-row pt-2 md:pt-18 md:justify-center md:items-center gap-[48px]">
          <div className="ImageWrapper md:w-1/2">
            <img
              src="/assets/why-us-section.png"
              alt="why us"
              className="object-cover w-full"
            />
          </div>
          <div className="TextWrapper md:w-1/2 flex flex-col">
          <h1 className="font-bold text-2xl md:text-4xl text-[var(--font-color)] font-main">
              {t("WhyChooseUs.Title")}
              <br className="hidden md:inline" />
              Academy?
            </h1>
            <div className="contentWrapper pt-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-center gap-4 py-2">
                  <div className="bg-blue-500 p-2 rounded-full w-12 h-12 flex justify-center items-center">
                    <p className="text-white font-medium text-lg font-main">{num}</p>
                  </div>
                  <p className="text-[var(--font-color)] font-medium font-main text-base md:text-xl">
                    {t(`WhyChooseUs.why-${["one", "two", "three", "four", "five"][num - 1]}`)}
                  </p>
                </div>
              ))}
              <button className="bg-blue-500 rounded-full py-2 px-6 mt-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
                <p className="text-white font-medium text-base md:text-xl font-main">
                  {t("WhyChooseUs.CTA")}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="CourseWrapper mx-4 flex flex-col md:flex-row pt-6 md:pt-[125px] mt-4 md:mt-[56px] justify-center items-center">
        <div className="textWrapper flex flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl md:text-4xl text-[var(--font-color)] font-main">
              {t("Course.Title")}
              <span className="inline-flex items-center gap-2 md:gap-3 ml-2">
                <Image
                  src="/assets/rocket.png"
                  alt="rocket"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] object-contain"
                  quality={100}
                />
              </span>
            </h1>
          </div>
          <p className="font-medium text-md md:text-xl text-[var(--font-color)] font-main md:text-center pt-4 md:pt-4 max-w-4xl mx-auto whitespace-pre-line">
            {t("Course.Description")}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 max-w-xl">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevelId(level.id)}
                className={`border px-2 md:px-6 py-2 rounded-3xl font-bold text-sm font-main transition 
                  ${
                    selectedLevelId === level.id
                      ? "bg-[#DCEAFB] text-[#007AFF] border-[#007AFF]"
                      : "border-[#DCEAFB] text-[#007AFF] hover:bg-[#DCEAFB]"
                  }
                  w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] md:w-auto
                `}
              >
                {level.label}
              </button>
            ))}
          </div>

        </div>
      </div>
      </div>
    </div>
  );
}
