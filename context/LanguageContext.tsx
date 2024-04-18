"use client";
import { createContext, useContext, useState } from "react";
interface LanguageContextType {
  language: "en" | "es";
  setLanguage: React.Dispatch<React.SetStateAction<"en" | "es">>;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

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
