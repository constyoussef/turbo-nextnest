import { Sidebar } from "@/components/layout/sidebar";
import { Menu } from "lucide-react";

export function MobileNavbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:hidden">
      <Sidebar
        triggerIcon={<Menu className="size-7" />}
        triggerClassName="absolute top-3 left-3"
      >
        {children}
      </Sidebar>
    </div>
  );
}
