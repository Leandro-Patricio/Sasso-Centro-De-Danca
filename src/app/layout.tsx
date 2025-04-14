import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import "./globals.css";
import MainNavbar from "./Components/MainNavbar/Navbar";
import { Montserrat as montserrat, Poppins } from "next/font/google";
import Footer from "./Components/Footer";


/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "Sasso Centro de dança",
  description: "Escola de dança e formação Sasso. O centro de dança de Niterói.",
};

const MontserratText = montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-text",
  preload: true
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-detail",
  preload: true
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>)
{
  return (
    <html lang="pt-br" className="">
      <body
        /*   ${geistSans.variable} ${geistMono.variable}  */
        className={`font-text ${MontserratText.variable} ${poppins.variable}
       w-[100lvw] min-w-[350px] h-full overflow-x-hidden antialiased   bg-bgMain relative`}
      >
        <MainNavbar
          key={'topMainNavbar'}
        />

        {children}

        <Footer />

      </body>
    </html>
  );
}
