import "./globals.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HumanRights from "@/components/HumanRights";
import Introduction from "@/components/Introduction";
import ProjectsSlider from "@/components/ProjectsSlider";

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <About />
      <Experience />
      <ProjectsSlider />
      <HumanRights />
      <Contact />
      <Footer />
    </main>
  );
}
