import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Turnament IF 3.0",
  game: "Mobile Legend",
  location: "Chawaa Cafe",
  date: "2003/12/09",
  registPrice: "90.000",
  prize: "1.000.000",
  contact: "085775546748"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
