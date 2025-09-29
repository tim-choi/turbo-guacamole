import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [location, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to section:', sectionId);
    }
  };

  const handleWorkClick = () => {
    if (location === '/') {
      scrollToSection('work');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('work'), 100);
    }
  };

  const handleEmailClick = () => {
    console.log('Email clicked');
    window.location.href = 'mailto:hello@alexchen.design';
  };

  return (
    <header className="w-full py-8 bg-white/95 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="font-serif flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium text-foreground">Timothy Choi</h1>
            <p className="text-sm text-muted-foreground mt-1">Design Engineer</p>
          </div>
          
          <nav className="flex items-center space-x-8">
            <button 
              onClick={handleWorkClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-work"
            >
              Work
            </button>
            <button 
              onClick={handleEmailClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-email"
            >
              timchoi03@gmail.com
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}