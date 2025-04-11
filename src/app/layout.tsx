import './styles/globals.css';
import { Anton, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400'],
});

export const metadata = {
  title: 'Dgamedev Academy',
  description: 'Dgamedev Academy - Learn Fun Programming',
  keywords: 'Dgamedev, Academy, Programming, Fun, Learn, Education, Coding, Kids Programming',
  authors: [{ name: 'Dgamedev Academy' }],
  icons: {
    icon: '/assets/Logo.png', 
  },
  creator: 'Dgamedev Academy',
  publisher: 'Dgamedev Academy',
  openGraph: {
    title: 'Dgamedev Academy',
    description: 'Dgamedev Academy - Learn Fun Programming',
    url: '',
    siteName: 'Dgamedev Academy',
    images: [
      {
        url: '/assets/Logo-2.png',
        width: 1200,
        height: 630,
        alt: 'Dgamedev Academy - Learn Fun Programming',
      },
    ],
  }
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {
  return (
    <html lang={params.locale}>
      <body className={`${poppins.variable} ${anton.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
