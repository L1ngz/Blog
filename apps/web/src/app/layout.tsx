import type { Metadata } from "next";
import { Poppins, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
/* 
  Default Fonts Below from Next.js
*/

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Ling Z.",
  description: "Ling Z.'s Personal Website, Blog, and Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${notoSansSC.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
