'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const t = useTranslations("Navigation");

  return (
    <header className="fixed top-0 left-0 right-0 px-[20px] container max-w-screen mx-auto z-50 my-4">
      <nav className="flex items-center justify-between bg-white p-4 md:p-[15px_30px] rounded-[20px]">
        {/* Left Section (Logo + Menu) */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Image
            height={500}
            width={500}
            src="/assets/Logo-2.png"
            alt="logo"
            className="size-[50px] md:size-[65px]"
          />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-[30px]">
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

        {/* Right Section */}
        <div className="flex items-center">
          {/* Language switcher always visible */}
          <LocaleSwitcher />

          {/* CTA Button (only in desktop) */}
          <Link
            href={`/free-trial`}
            className="hidden md:inline-block bg-[#004AAB] p-[10px_16px] rounded-xl font-main hover:shadow-[0_12px_30px_0_#312ECB66] transition-all duration-300 font-bold text-white"
          >
            {t("CTA")}
          </Link>

          {/* Hamburger Icon - only mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black hover:text-gray-600 transition-all duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white p-4 rounded-xl shadow-lg space-y-4">
          <ul className="flex flex-col gap-4 text-base font-main font-semibold">
            <li>
              <Link href={`#`} onClick={toggleMenu}>
                {t("Home")}
              </Link>
            </li>
            <li>
              <Link href={`#`} onClick={toggleMenu}>
                {t("Class")}
              </Link>
            </li>
            <li>
              <Link href={`#`} onClick={toggleMenu}>
                {t("Contact")}
              </Link>
            </li>
            <li>
              <Link
                href={`/free-trial`}
                onClick={toggleMenu}
                className="bg-[#004AAB] text-white w-full text-center block py-2 rounded-xl"
              >
                {t("CTA")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
