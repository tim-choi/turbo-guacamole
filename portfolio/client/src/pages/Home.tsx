import { useEffect } from "react";
import Header from "../components/Header";
import PersonalIntro from "../components/PersonalIntro";
import WorkSection from "../components/WorkSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Background from "../components/Background";

export default function Home() {
  useEffect(() => {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode like Moritz's design
      document.documentElement.classList.remove('dark');
    }
  }, []);
  

  return (
    <div className="min-h-screen">
      <Background />
      <Header />
      <main>
        <PersonalIntro />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}