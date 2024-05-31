import "../styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { LanguageWrapper } from "../context/LanguageContext";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jordi Roca",
  description:
    "This is the portfolio of Jordi Roca. Find about him, experiences, clients, projects & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageWrapper>
      <html lang="en">
        <body className={notoSans.className}>{children}</body>
      </html>
    </LanguageWrapper>
  );
}
