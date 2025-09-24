import { Nunito, Inter  } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


//components
import BottomNavbar from "@/components/bottomnavbar"
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SilentTalk",
  description: "A fun way to learn American Sign Language",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Patrick+Hand&display=swap" rel="stylesheet"/>
        </head>
        <body
          className={`${nunito.variable} ${inter.variable} overflow-x-hidden overflow-y-auto`}
        >
          {children}
          <BottomNavbar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
