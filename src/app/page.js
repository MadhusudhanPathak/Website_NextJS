import Section from "@/components/section";
import Navbar from "@/components/NavBar";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Cursor />
      <Hero />
      <Section />
      {/* <Mailing /> */}
      <Footer />
    </>
  );
}
