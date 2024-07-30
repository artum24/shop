import { MainSection } from "./components/mainSection";
import { Products } from "./components/products";
import { EmailSection } from "./components/emailSection";
import { AdvantagesSection } from "./components/advantagesSection";
import { BlogSection } from "./components/blogSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <Products />
      <EmailSection />
      <AdvantagesSection />
      <BlogSection />
    </>
  );
}
