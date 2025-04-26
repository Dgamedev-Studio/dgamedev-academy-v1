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
        
        <div className="relative z-10 pt-34 md:mt-[50px] lg:mt[80px] flex justify-center flex-col">
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
      <div className="ContentWrapper bg-[#F5F6FB] w-full rounded-t-3xl md:rounded-t-4xl  mt-4 md:mt-[56px] p-2 md:p-8 flex flex-col items-center">
        <div className="WhyUs mx-4 md:mx-12 flex flex-col md:flex-row pt-2 md:pt-18 md:justify-center md:items-center gap-[48px]">
          <div className="ImageWrapper md:w-1/2">
            <img
              src="/assets/whyus-new.png"
              alt="why us"
              className="object-cover w-full"
            />
          </div>
          <div className=" TextWrapper md:w-1/2 flex flex-col">
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
        <div className="CourseWrapper mx-auto flex flex-col md:flex-row pt-6 md:pt-[125px] mt-4 md:mt-[56px] justify-center items-center">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="textWrapper flex flex-col justify-center items-center px-4">
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
          <p className="font-medium text-md md:text-xl text-[var(--font-color)] font-main md:text-center pt-4 md:pt-4 max-w-4xl mx-auto whitespace-pre-line">
            {t("Course.Description")}
          </p>
          <div className="pt-6 flex flex-wrap lg:flex-nowrap justify-center gap-4 max-w-xl md:max-w-max">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevelId(level.id)}
                className={`border px-1 md:px-8 py-2 rounded-3xl font-bold text-sm font-main transition 
                  ${
                    selectedLevelId === level.id
                      ? "bg-[#DCEAFB] text-[#007AFF] border-[#007AFF]"
                      : "border-[#DCEAFB] text-[#007AFF] hover:bg-[#DCEAFB]"
                  }
                  w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-auto
                `}
              >
                {level.label}
              </button>
            ))}
          </div>
          </div>
          <div className="CardWrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 md:my-10 gap-3 md:gap-6">
              <div className="bg-white p-4 md:p-0 w-[350px] h-[450px] md:w-[300px] md:h-[380px] rounded-2xl drop-shadow-2xl flex flex-col">
                    <div className="ImageWrapper w-full h-[200px] md:h-[180px] bg-red-900 rounded-t-xl md:rounded-t-2xl">

                    </div>
                    <div className="TextWrapper pt-4 md:p-3">
                          <h1 className="font-bold font-main text-xl">Stracth Block Coding</h1>
                          <p className="font-regular font-main text-sm pt-2 pb-2 pr-2">Belajar Cara Membuat Game, Melatih Anak Logic Programming</p>
                          <div className="bg-[#007AFF] w-30 h-9 flex items-center justify-center rounded-lg md:rounded-xl my-2">
                            <p className="text-white text-sm font-medium">Junior Engineer</p>
                          </div>
                          <div className="mt-2 PriceWrapper flex justify-between items-center">
                            <p className="text-[#007AFF] font-medium text-2xl">Rp 99.000<span className="text-sm  font-main text-[#353748]"> / Perbulan</span></p>
                            <button>
                              <img src="/assets/arrow.svg" alt="" />
                            </button>
                          </div>
                          
                    </div>
              </div>
              <div className="bg-white p-4 md:p-0 w-[350px] h-[450px] md:w-[300px] md:h-[380px] rounded-2xl drop-shadow-2xl flex flex-col">
                    <div className="ImageWrapper w-full h-[200px] md:h-[180px] bg-red-900 rounded-t-xl md:rounded-t-2xl">

                    </div>
                    <div className="TextWrapper pt-4 md:p-3">
                          <h1 className="font-bold font-main text-xl">Stracth Block Coding</h1>
                          <p className="font-regular font-main text-sm pt-2 pb-2 pr-2">Belajar Cara Membuat Game, Melatih Anak Logic Programming</p>
                          <div className="bg-[#007AFF] w-30 h-9 flex items-center justify-center rounded-lg md:rounded-xl my-2">
                            <p className="text-white text-sm font-medium">Junior Engineer</p>
                          </div>
                          <div className="mt-2 PriceWrapper flex justify-between items-center">
                            <p className="text-[#007AFF] font-medium text-2xl">Rp 99.000<span className="text-sm  font-main text-[#353748]"> / Perbulan</span></p>
                            <button>
                              <img src="/assets/arrow.svg" alt="" />
                            </button>
                          </div>
                          
                    </div>
              </div>
              <div className="bg-white p-4 md:p-0 w-[350px] h-[450px] md:w-[300px] md:h-[380px] rounded-2xl drop-shadow-2xl flex flex-col">
                    <div className="ImageWrapper w-full h-[200px] md:h-[180px] bg-red-900 rounded-t-xl md:rounded-t-2xl">

                    </div>
                    <div className="TextWrapper pt-4 md:p-3">
                          <h1 className="font-bold font-main text-xl">Stracth Block Coding</h1>
                          <p className="font-regular font-main text-sm pt-2 pb-2 pr-2">Belajar Cara Membuat Game, Melatih Anak Logic Programming</p>
                          <div className="bg-[#007AFF] w-30 h-9 flex items-center justify-center rounded-lg md:rounded-xl my-2">
                            <p className="text-white text-sm font-medium">Junior Engineer</p>
                          </div>
                          <div className="mt-2 PriceWrapper flex justify-between items-center">
                            <p className="text-[#007AFF] font-medium text-2xl">Rp 99.000<span className="text-sm  font-main text-[#353748]"> / Perbulan</span></p>
                            <button>
                              <img src="/assets/arrow.svg" alt="" />
                            </button>
                          </div>
                          
                    </div>
              </div>
              <div className="bg-white p-4 md:p-0 w-[350px] h-[450px] md:w-[300px] md:h-[380px] rounded-2xl drop-shadow-2xl flex flex-col">
                    <div className="ImageWrapper w-full h-[200px] md:h-[180px] bg-red-900 rounded-t-xl md:rounded-t-2xl">

                    </div>
                    <div className="TextWrapper pt-4 md:p-3">
                          <h1 className="font-bold font-main text-xl">Stracth Block Coding</h1>
                          <p className="font-regular font-main text-sm pt-2 pb-2 pr-2">Belajar Cara Membuat Game, Melatih Anak Logic Programming</p>
                          <div className="bg-[#007AFF] w-30 h-9 flex items-center justify-center rounded-lg md:rounded-xl my-2">
                            <p className="text-white text-sm font-medium">Junior Engineer</p>
                          </div>
                          <div className="mt-2 PriceWrapper flex justify-between items-center">
                            <p className="text-[#007AFF] font-medium text-2xl">Rp 99.000<span className="text-sm  font-main text-[#353748]"> / Perbulan</span></p>
                            <button>
                              <img src="/assets/arrow.svg" alt="" />
                            </button>
                          </div>
                          
                    </div>
              </div>
              <div className="bg-white p-4 md:p-0 w-[350px] h-[450px] md:w-[300px] md:h-[380px] rounded-2xl drop-shadow-2xl flex flex-col">
                    <div className="ImageWrapper w-full h-[200px] md:h-[180px] bg-red-900 rounded-t-xl md:rounded-t-2xl">

                    </div>
                    <div className="TextWrapper pt-4 md:p-3">
                          <h1 className="font-bold font-main text-xl">Stracth Block Coding</h1>
                          <p className="font-regular font-main text-sm pt-2 pb-2 pr-2">Belajar Cara Membuat Game, Melatih Anak Logic Programming</p>
                          <div className="bg-[#007AFF] w-30 h-9 flex items-center justify-center rounded-lg md:rounded-xl my-2">
                            <p className="text-white text-sm font-medium">Junior Engineer</p>
                          </div>
                          <div className="mt-2 PriceWrapper flex justify-between items-center">
                            <p className="text-[#007AFF] font-medium text-2xl">Rp 99.000<span className="text-sm  font-main text-[#353748]"> / Perbulan</span></p>
                            <button>
                              <img src="/assets/arrow.svg" alt="" />
                            </button>
                          </div>
                          
                    </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
