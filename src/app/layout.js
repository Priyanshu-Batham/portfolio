import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Priyanshu Batham",
  description: "Priyanshu Batham's Portfolio website",
  keywords: "priyanshu, priyanshu batham, portfolio, portfolio website",
  author: "Priyanshu Batham",
  siteUrl: "https://priyanshu-batham.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
