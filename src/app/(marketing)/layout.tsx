import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { GradientDefs } from "@/components/svg/Gradients";
import { navData, footerData } from "@/content/shared";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <GradientDefs />
      <Nav data={navData} />
      {children}
      <Footer data={footerData} />
    </>
  );
}
