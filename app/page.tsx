"use client";
import "../styles/globals.css";
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
          <Header
            languages={dataEn.header.languages}
            navLinks={dataEn.header.navlinks}
            logo={dataEn.header.logo}
          />
          <Hero
            text={dataEn.hero.text}
            image={dataEn.hero.image}
            linkedinCta={dataEn.footer.linkedinCta}
            githubCta={dataEn.footer.githubCta}
          />
          <About
            id={dataEn.id}
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
            id={dataEn.id.experience}
            title={dataEn.experience.title}
            items={dataEn.experience.items}
          />
          <ProjectsSlider
            id={dataEn.id.projects}
            // title={dataEn.projects.title}
            // items={dataEn.projects.items}
            latestProject={dataEn.projects.latestProject}
            literals={dataEn.literals}
          />
          <HumanRights
            id={dataEn.id.humanRights}
            title={dataEn.humanRights.title}
            text={dataEn.humanRights.text}
            items={dataEn.humanRights.items}
            cta={dataEn.humanRights.cta}
          />
          <Contact
            id={dataEn.id.contact}
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
          <Header
            languages={dataEs.header.languages}
            navLinks={dataEs.header.navlinks}
            logo={dataEs.header.logo}
          />
          <Hero
            text={dataEs.hero.text}
            image={dataEs.hero.image}
            linkedinCta={dataEs.footer.linkedinCta}
            githubCta={dataEs.footer.githubCta}
          />
          <About
            id={dataEs.id}
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
            id={dataEs.id.experience}
            title={dataEs.experience.title}
            items={dataEs.experience.items}
          />
          <ProjectsSlider
            id={dataEs.id.projects}
            // title={dataEs.projects.title}
            // items={dataEs.projects.items}
            latestProject={dataEs.projects.latestProject}
            literals={dataEs.literals}
          />
          <HumanRights
            id={dataEs.id.humanRights}
            title={dataEs.humanRights.title}
            text={dataEs.humanRights.text}
            items={dataEs.humanRights.items}
            cta={dataEs.humanRights.cta}
          />
          <Contact
            id={dataEs.id.contact}
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
