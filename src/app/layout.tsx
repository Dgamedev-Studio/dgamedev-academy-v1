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
