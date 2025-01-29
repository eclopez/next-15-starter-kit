import { Metadata } from 'next';
import { Roboto, Roboto_Serif } from 'next/font/google';
import { Header } from '@/components/header';

import '@/styles/global.css';

const metadata: Metadata = {
  title: 'Next 15 Starter Kit',
  description: 'Starting point for Next.js 15 projects',
};

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const robotoSerif = Roboto_Serif({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif',
});

function RootLayout(props: React.PropsWithChildren<object>) {
  const { children } = props;

  return (
    <html lang="en" className={`${roboto.variable} ${robotoSerif.variable}`}>
      <body className="antialiased font-roboto">
        <Header className="p-2" text="Site" />
        <div className="p-2">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
export { metadata };
