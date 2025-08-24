import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'Agencia de Autos | Los mejores vehículos para ti',
  description: 'Encuentra los mejores autos nuevos y usados en nuestra agencia. Ofrecemos financiamiento, garantía y los mejores precios del mercado.',
  keywords: 'autos, vehículos, compra de autos, venta de autos, agencia de autos, autos usados, autos nuevos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-light overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}