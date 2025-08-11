"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function DesktopNavbar({ children }: { children: React.ReactNode }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isScrolled = scrollPosition > 10;
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 hidden w-full text-white transition duration-300 ease-in-out md:block",
        isScrolled && "bg-white text-gray-500 shadow-md",
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {children}
      </div>
      <Separator className="h-1 w-full bg-gray-100 opacity-25" />
    </nav>
  );
}
