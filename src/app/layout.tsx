import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainNavbar from "./Components/MainNavbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sasso Danças - Centro de dança",
  description: "Sasso Centro de dança",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>)
{
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable}
       w-100lvw min-w-[350px] h-full overflow-x-hidden antialiased   bg-bgMain relative`}
      >
        <MainNavbar
          key={'topMainNavbar'}
        />
        {children}

      </body>
    </html>
  );
}
