import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Image from "next/image";

export default function LocaleSwitcher() {
  const locale = useLocale();

  // Mapping bahasa ke path gambar bendera
  const flagImages = {
    id: "/assets/img-indonesia-flag.png", // Sesuaikan dengan nama file bendera Indonesia
    en: "/assets/img-us-flag.png"  // Sesuaikan dengan nama file bendera Inggris
  };

  return (
    <div className='flex items-center gap-2'>
      {/* Ganti Globe dengan gambar bendera sesuai locale aktif */}
      <Image 
        src={flagImages[locale as keyof typeof flagImages]}
        alt={`${locale} flag`}
        width={20}
        height={15}
        className="h-4 w-5 object-cover"
      />
      
      <LocaleSwitcherSelect defaultValue={locale} label='Select a locale'>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
