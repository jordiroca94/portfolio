import "./globals.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HumanRights from "@/components/HumanRights";
import ProjectsSlider from "@/components/ProjectsSlider";
import Hero from "@/components/Hero";
import data from "../mock-data/data";

export default function Home() {
  return (
    <main>
      <Header navLinks={data.header.navlinks} logo={data.header.logo} />
      <Hero text={data.hero.text} image={data.hero.image} />
      <About />
      <Experience />
      <ProjectsSlider />
      <HumanRights />
      <Contact />
      <Footer />
    </main>
  );
}
