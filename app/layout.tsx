import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import "./global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Library",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
