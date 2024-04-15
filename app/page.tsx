import "./globals.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HumanRights from "@/components/HumanRights";
import ProjectsSlider from "@/components/ProjectsSlider";
import Hero from "@/components/Hero";
import data from "../data/data-en.json";

export default function Home() {
  return (
    <main>
      <Header navLinks={data.header.navlinks} logo={data.header.logo} />
      <Hero text={data.hero.text} image={data.hero.image} />
      <About
        title={data.about.title}
        countUp={data.about.countUp}
        description={data.about.description}
        companyCta={data.about.companyCta}
        humanRightsCta={data.about.humanRightsCta}
        downloadCta={data.about.downloadCta}
        contactCta={data.about.contactCta}
        literals={data.literals}
      />
      <Experience title={data.experience.title} items={data.experience.items} />
      <ProjectsSlider
        title={data.projects.title}
        items={data.projects.items}
        literals={data.literals}
      />
      <HumanRights
        title={data.humanRights.title}
        text={data.humanRights.text}
        items={data.humanRights.items}
        cta={data.humanRights.cta}
      />
      <Contact
        title={data.contact.title}
        text={data.contact.text}
        email={data.contact.email}
        nameField={data.contact.nameField}
        emailField={data.contact.emailField}
        messageField={data.contact.messageField}
        sentSuccessfully={data.contact.sentSuccessfully}
        sendLabel={data.contact.sendLabel}
      />
      <Footer
        linkedinCta={data.footer.linkedinCta}
        githubCta={data.footer.githubCta}
        copyright={data.footer.copyright}
        createdBy={data.footer.createdBy}
      />
    </main>
  );
}
