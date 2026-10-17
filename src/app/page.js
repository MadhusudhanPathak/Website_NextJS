import NavBar from "@/components/layout/NavBar";
import Cursor from "@/components/layout/Cursor";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Personas from "@/components/sections/Personas";

export default function Home() {
  return (
    <>
      <NavBar />
      <Cursor />
      <Hero />
      <Personas />
      <Footer />
    </>
  );
}
