"use client";
import "./globals.css";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HumanRights from "@/components/HumanRights";
import ProjectsSlider from "@/components/ProjectsSlider";
import Hero from "@/components/Hero";
import dataEn from "../data/data-en.json";
import dataEs from "../data/data-es.json";
import { UseLanguageContext } from "@/context/LanguageContext";

export default function Home() {
  const { language } = UseLanguageContext();
  return (
    <main>
      {language === "en" ? (
        <>
          <Header navLinks={dataEn.header.navlinks} logo={dataEn.header.logo} />
          <Hero text={dataEn.hero.text} image={dataEn.hero.image} />
          <About
            title={dataEn.about.title}
            countUp={dataEn.about.countUp}
            description={dataEn.about.description}
            companyCta={dataEn.about.companyCta}
            humanRightsCta={dataEn.about.humanRightsCta}
            downloadCta={dataEn.about.downloadCta}
            contactCta={dataEn.about.contactCta}
            literals={dataEn.literals}
          />
          <Experience
            title={dataEn.experience.title}
            items={dataEn.experience.items}
          />
          <ProjectsSlider
            title={dataEn.projects.title}
            items={dataEn.projects.items}
            literals={dataEn.literals}
          />
          <HumanRights
            title={dataEn.humanRights.title}
            text={dataEn.humanRights.text}
            items={dataEn.humanRights.items}
            cta={dataEn.humanRights.cta}
          />
          <Contact
            title={dataEn.contact.title}
            text={dataEn.contact.text}
            email={dataEn.contact.email}
            nameField={dataEn.contact.nameField}
            emailField={dataEn.contact.emailField}
            messageField={dataEn.contact.messageField}
            sentSuccessfully={dataEn.contact.sentSuccessfully}
            sendLabel={dataEn.contact.sendLabel}
          />
          <Footer
            linkedinCta={dataEn.footer.linkedinCta}
            githubCta={dataEn.footer.githubCta}
            copyright={dataEn.footer.copyright}
            createdBy={dataEn.footer.createdBy}
          />
        </>
      ) : (
        <>
          <Header navLinks={dataEs.header.navlinks} logo={dataEs.header.logo} />
          <Hero text={dataEs.hero.text} image={dataEs.hero.image} />
          <About
            title={dataEs.about.title}
            countUp={dataEs.about.countUp}
            description={dataEs.about.description}
            companyCta={dataEs.about.companyCta}
            humanRightsCta={dataEs.about.humanRightsCta}
            downloadCta={dataEs.about.downloadCta}
            contactCta={dataEs.about.contactCta}
            literals={dataEs.literals}
          />
          <Experience
            title={dataEs.experience.title}
            items={dataEs.experience.items}
          />
          <ProjectsSlider
            title={dataEs.projects.title}
            items={dataEs.projects.items}
            literals={dataEs.literals}
          />
          <HumanRights
            title={dataEs.humanRights.title}
            text={dataEs.humanRights.text}
            items={dataEs.humanRights.items}
            cta={dataEs.humanRights.cta}
          />
          <Contact
            title={dataEs.contact.title}
            text={dataEs.contact.text}
            email={dataEs.contact.email}
            nameField={dataEs.contact.nameField}
            emailField={dataEs.contact.emailField}
            messageField={dataEs.contact.messageField}
            sentSuccessfully={dataEs.contact.sentSuccessfully}
            sendLabel={dataEs.contact.sendLabel}
          />
          <Footer
            linkedinCta={dataEs.footer.linkedinCta}
            githubCta={dataEs.footer.githubCta}
            copyright={dataEs.footer.copyright}
            createdBy={dataEs.footer.createdBy}
          />
        </>
      )}
    </main>
  );
}
