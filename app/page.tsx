import "./globals.css";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import HumanRights from "@/components/HumanRights";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <About />
      <Experience />
      <HumanRights />
    </main>
  );
}
