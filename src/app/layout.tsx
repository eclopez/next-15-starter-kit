import { Metadata } from "next";
import { Header } from "@/components/header";

import "@/styles/global.css";

const metadata: Metadata = {
  title: "Next 15 Starter Kit",
  description: "Starting point for Next.js 15 projects",
};

interface RootLayoutProps {}

function RootLayout(props: React.PropsWithChildren<RootLayoutProps>) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Header text="Site" />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
