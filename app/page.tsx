import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";

export const metadata = {
  title: "Jun Sheng | Frontend Developer Portfolio",
  description:
    "Jun Sheng is a Frontend Developer specializing in scalable web and mobile applications using React, Next.js, Vue, and TypeScript.",

  keywords: [
    "Jun Sheng",
    "Frontend Developer",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Vue Developer",
    "TypeScript",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Jun Sheng" }],
  creator: "Jun Sheng",

  openGraph: {
    title: "Jun Sheng | Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in scalable web and mobile applications with React, Next.js, Vue, and TypeScript.",
    url: "https://your-domain.com", // change this
    siteName: "Jun Sheng Portfolio",
    images: [
      {
        url: "/images/hero-image.png", // or og-image.png
        width: 1200,
        height: 630,
        alt: "Jun Sheng - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jun Sheng | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, Vue, and TypeScript.",
    images: ["/images/hero-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
