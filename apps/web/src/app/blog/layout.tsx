import { Navbar } from "@/components/layout/navbar/navbar";
import { NavbarContainer } from "@/components/layout/navbar/navbar-container";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      {children}
    </div>
  );
}
