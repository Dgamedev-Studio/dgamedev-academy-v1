"use client";

import React from "react";
import { useTranslations } from "use-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  return (
    <footer className="relative overflow-hidden max-w-screen mx-auto ">
      <div className="container max-w-[1130px] mx-auto flex flex-col sm:flex-row flex-wrap gap-y-8 items-start justify-between pt-10 md:pt-[60px] pb-24 md:pb-[220px] relative z-10 p-6  ">
        {/* Logo dan Social Media Section - Kiri */}
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <div className="flex shrink-0  overflow-hidden">
              <img
                src="/assets/Logo_Footer_64x64.svg"
                className="object-contain w-full h-full"
                alt="logo"
              />
            </div>
            <div className="flex flex-col">
              <p
                id="CompanyName"
                className="font-extrabold text-lg md:text-xl leading-tight md:leading-[30px] text-white"
              >
                THETA ACADEMY
              </p>
              <p
                id="CompanyTagline"
                className="text-xs md:text-sm text-white max-w-[300px] mt-2"
              >
                {t("TagLine.TagLine")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="" className="hover:opacity-80 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6 flex shrink-0 overflow-hidden">
                <img
                  src="/assets/icons/youtube.svg"
                  className="w-full h-full object-contain"
                  alt="youtube"
                />
              </div>
            </Link>
            <Link href="" className="hover:opacity-80 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6 flex shrink-0 overflow-hidden">
                <img
                  src="/assets/icons/whatsapp.svg"
                  className="w-full h-full object-contain"
                  alt="whatsapp"
                />
              </div>
            </Link>
            <Link href="" className="hover:opacity-80 transition-opacity">
              <div className="w-5 h-5 md:w-6 md:h-6 flex shrink-0 overflow-hidden">
                <img
                  src="/assets/icons/instagram.svg"
                  className="w-full h-full object-contain"
                  alt="instagram"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Section - Tengah dan Kanan */}
        <div className="flex flex-row flex-wrap justify-between sm:justify-end gap-6 sm:gap-5 md:gap-[50px] w-full sm:w-auto mt-6 sm:mt-0">
          {/* Product Links */}
          <div className="flex flex-col w-[45%] sm:w-[150px] md:w-[200px] gap-2 md:gap-3">
            <p className="font-bold text-base md:text-lg text-white">
              {t("MenuSection.Menu")}
            </p>
            <Link
              href=""
              className="text-sm md:text-base text-white hover:text-white hover:underline transition-all duration-300"
            >
              {t("MenuSection.Course")}
            </Link>
            <Link
              href=""
              className="text-sm md:text-base text-white hover:text-white hover:underline transition-all duration-300"
            >
              {t("MenuSection.About")}
            </Link>
          </div>

          {/* About Links */}
          <div className="flex flex-col w-[45%] sm:w-[150px] md:w-[200px] gap-2 md:gap-3">
            <p className="font-bold text-base md:text-lg text-white">
              {t("PolicySection.Policy")}
            </p>
            <Link
              href={`/${locale}/privacy`}
              className="text-sm md:text-base text-white hover:text-white hover:underline transition-all duration-300"
            >
              {t("PolicySection.PrivacyPolicy")}
            </Link>
            <Link
              href={`/${locale}/terms-and-conditions`}
              className="text-sm md:text-base text-white hover:text-white hover:underline transition-all duration-300"
            >
              {t("PolicySection.TermsOfService")}
            </Link>
          </div>

          {/* Contact Section - Tetap di kanan */}
          <div className="flex flex-col w-full sm:w-[150px] md:w-[200px] gap-2 md:gap-3">
            <p className="hidden md:block font-bold text-base md:text-lg text-white">
              {t("ContactSection.Contact")}
            </p>
            <Link
              href=""
              className="bg-amber-600 p-2 font-medium hover:cursor-pointer hover:bg-amber-700 rounded-full flex justify-center text-white hover:text-white text-sm md:text-base transition-all duration-300"
            >
              {t("ContactSection.ContactUsButton")}
            </Link>
          </div>
        </div>
      </div>

      {/* Watermark besar untuk desktop */}
      <div className="absolute -bottom-[135px] w-full max-w-auto hidden md:block">
        <p className="font-extrabold md:text-[60px] lg:text-[100px] leading-[375px] text-center text-white opacity-5">
          THETA ACADEMY
        </p>
      </div>

      {/* Watermark untuk mobile - diubah untuk perfect centering */}
      <div className="absolute left-0 right-0 -bottom-[50px] w-full md:hidden">
        <p className="font-extrabold text-2xl leading-[150px] text-center text-white opacity-5 mx-auto">
          THETA ACADEMY
        </p>
      </div>
    </footer>
  );
}
