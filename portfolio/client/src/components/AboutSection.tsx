import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import profileImage from '@assets/images/fullbody.png';

export default function AboutSection() {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      console.log('Resume download initiated');
      
      // Fetch the file with error handling
      const response = await fetch('/api/resume/download');
      
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }
      
      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Alex-Chen-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('Resume download completed');
      
      toast({
        title: "Resume Downloaded",
        description: "Alex Chen's resume has been downloaded successfully.",
        duration: 3000,
      });
    } catch (error) {
      console.error('Failed to download resume:', error);
      toast({
        variant: "destructive",
        title: "Download Failed", 
        description: "Unable to download resume. Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="min-h-screen py-12 bg-card flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif sm:text-4xl text-foreground mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
              With a passion for coding and design that started in childhood, I'm now a 
              Design Engineer and recent UCSB Computer Science graduate who creates full-stack 
              applications that seamlessly blend technical precision with thoughtful design 🚀
            </p>

            <p>
              My work spans healthcare platforms, educational tools, IT systems, and interactive 
              gaming experiences. I live for projects that push both my engineering skills 
              and design instincts—whether it's architecting scalable systems or perfecting 
              the smallest interaction details ⚡
            </p>

            <p>
              Off the screen, I'm strategizing over chess boards, pushing myself on the 
              basketball court, or producing beats. Same problem-solving drive, different 
              canvas 🎵
            </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif text-foreground mb-3">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• User Research & Testing</div>
                  <div>• Interaction Design</div>
                  <div>• Prototyping (Figma)</div>
                  <div>• Design Systems</div>
                  <div>• Web and Mobile App Design</div>
                  <div>• Accessibility (WCAG)</div>
                  <div>• Design Thinking</div>
                  <div>• React</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleDownloadResume}
                  disabled={isDownloading}
                  className="w-full sm:w-auto"
                  data-testid="button-download-resume"
                >
                {isDownloading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </>
                )}
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    const el = document.getElementById('work');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto"
                  data-testid="button-see-work"
                >
                  See my Work
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm mx-auto">
              <img 
                src={profileImage} 
                alt="Alex Chen - UX/UI Designer"
                className="w-full rounded-lg shadow-lg object-cover max-h-[60vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}