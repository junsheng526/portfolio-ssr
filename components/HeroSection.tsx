import "../styles/HeroSection.scss";
import HAHA from "../public/images/hero-image.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-img">
        <Image className="img" src={HAHA} alt="Jun Sheng" />
      </div>
      <div className="content">
        <h1>Hi, I'm Jun Sheng</h1>
        <h2>Frontend / Fullstack Developer</h2>
        <p>
          I’m a Frontend / Fullstack Developer specializing in building
          scalable, high-performance web and mobile applications. I work with
          React, Next.js, Vue, and TypeScript, focusing on clean architecture,
          maintainable code, and great user experience.
        </p>
        <a href="mailto:junshengchoo57@gmail.com" className="cta">
          Contact Me
        </a>
      </div>
    </section>
  );
};
