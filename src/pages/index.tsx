import Content from "@/components/content/Content";
import Cases from "@/components/cases/Cases";
import Description from "@/components/description/Description";
import Discuss from "@/components/discuss/Discuss";
import Services from "@/components/services/Services";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Content />
      <Cases />
      <Description />
      <Discuss />
      <Services />
      <Footer />
    </>
  );
}
