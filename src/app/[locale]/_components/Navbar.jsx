'use client';

import Image from "next/image";
// import { Globe } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

import Link from "next/link";
export default function Navbar() {
  
  const t = useTranslations('Navigation');

  return (
    <header className="px-[40px] container max-w-screen mx-auto relative pt-0 z-10 my-4">
      <nav className="flex flex-wrap items-center justify-between bg-white p-[15px_30px] rounded-[20px] gap-y-3">
        <div className="flex items-center gap-8 ">
          <div className="flex shrink-0 overflow-hidden">
            <Image
              height={500}
              width={500}
              src="/assets/Logo-2.png"
              alt="logo"
              className="size-[65px]"
            />
          </div>
          {/* <div className="flex flex-col">
            <p id="CompanyName" className="font-bold font-main text-xl leading-[30px]">
              Dgamedev
            </p>
            <p id="CompanyTagline" className="text-sm font-main text-cp-light-grey">
              Academy
            </p>
          </div> */}

        <ul className="flex flex-wrap items-center gap-[35px]">
          <li className="p-2 font-semibold font-main hover:bg-gray-100 rounded-lg hover:text-[#004AAB] transition-all duration-100">
            <Link href={`#`}>{t("Home")}</Link>
          </li>
          <li className="p-2 font-semibold font-main hover:bg-gray-100 rounded-lg hover:text-[#004AAB] transition-all duration-100">
            <Link href={`#`}>{t("Class")}</Link>
          </li>
          <li className="p-2 font-semibold font-main hover:bg-gray-100 rounded-lg hover:text-[#004AAB] transition-all duration-100">
            <Link href={`#`}>{t("Contact")}</Link>
          </li>
        </ul>

        </div>

        <div className="flex items-center ">
          <LocaleSwitcher />
          <Link
            href={`/free-trial`}
            className="bg-[#004AAB] p-[14px_20px] w-fit rounded-xl font-main hover:shadow-[0_12px_30px_0_#312ECB66]  transition-all duration-300 font-bold text-white"
          >
            {t("CTA")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
