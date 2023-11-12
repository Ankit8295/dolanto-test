import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "../providers/Provider";
import { Header } from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { AOSInit } from "../utils/aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DOLANTO",
  description:
    "Dolanto is an international leading clean room design, construction and installation company. Established in 1980 in the United Kingdom MRC has supported the progression of high end engineering industries through innovative design concepts and material technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={poppins.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
