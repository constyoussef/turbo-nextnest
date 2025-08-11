import { DesktopNavbar } from "@/components/layout/desktop-navbar";
import { Navbar } from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistMono = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turbo Nest Next",
  description: "Created by Youssef El Sayed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistMono.className} bg-gray-50`}>
        <DesktopNavbar>
          <Navbar />
        </DesktopNavbar>
        {children}
      </body>
    </html>
  );
}
