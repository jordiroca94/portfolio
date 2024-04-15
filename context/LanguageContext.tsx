"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext<any>({ language: "en" });

export function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "es">("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function UseLanguageContext() {
  return useContext(LanguageContext);
}
