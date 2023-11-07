import "./globals.css";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <About />
      <Experience />
    </main>
  );
}
