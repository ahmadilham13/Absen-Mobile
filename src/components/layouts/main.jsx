import { Inter } from "next/font/google";
import NavbarDefault from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Main({ children }) {
  return (
    <>
      <NavbarDefault />
      <main className={`flex min-h-screen flex-col ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
