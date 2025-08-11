"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface SidebarProps {
  children: React.ReactNode;
  triggerIcon: React.ReactNode;
  triggerClassName?: string;
}

export function Sidebar({
  children,
  triggerIcon,
  triggerClassName,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref as React.RefObject<HTMLElement>, () =>
    setIsOpen(false),
  );
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("", triggerClassName)}
      >
        {triggerIcon}
      </button>
      <div
        ref={ref}
        className={cn(
          "absolute top-0 z-10 min-h-screen w-80 rounded-r-md bg-white transition-all",

          !isOpen && "-left-full",
          isOpen && "left-0",
        )}
      >
        {children}
      </div>
    </>
  );
}
