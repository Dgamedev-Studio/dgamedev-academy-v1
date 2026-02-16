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
  title: 'Theta Academy',
  description: 'Theta Academy - Learn Fun Programming',
  keywords: 'Theta, Academy, Programming, Fun, Learn, Education, Coding, Kids Programming',
  authors: [{ name: 'Theta Academy' }],
  icons: {
    icon: '/assets/theta_logo_192x192.png', 
  },
  creator: 'Theta Academy',
  publisher: 'Theta Academy',
  openGraph: {
    title: 'Theta Academy',
    description: 'Theta Academy - Learn Fun Programming',
    url: '',
    siteName: 'Theta Academy',
    images: [
      {
        url: '/assets/theta_logo.png',
        width: 1200,
        height: 630,
        alt: 'Theta Academy - Learn Fun Programming',
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
