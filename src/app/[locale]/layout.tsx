
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Navbar from './_components/Navbar';
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Kita perlu await params jika kita ingin mengakses propertinya
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Cek locale yang valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
    <div className='mx-8 my-4'>
      <Navbar />
      {children}
    </div>
  </NextIntlClientProvider>
  );
}
