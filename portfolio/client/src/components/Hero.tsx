import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from '@assets/generated_images/Designer_workspace_hero_image_bdd6e84c.png';

export default function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to work section');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Designer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Crafting Digital
          <span className="block text-primary">Experiences</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          UX/UI Designer passionate about creating elegant, user-centered solutions 
          that bridge the gap between human needs and digital possibilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg" 
            onClick={scrollToWork}
            className="min-w-32"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                console.log('Scrolled to contact section');
              }
            }}
            className="min-w-32"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>

        <button 
          onClick={scrollToWork}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}