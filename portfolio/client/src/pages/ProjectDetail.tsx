import { useParams, useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "../components/Header";
import { getProjectById } from "@shared/projects";
import { getProjectImage } from "@shared/assets";
import Background from "../components/Background";

export default function ProjectDetail() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  
  const project = id ? getProjectById(id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Background />
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-medium text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Background />
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Back button */}
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate("/")}
          className="mb-8 hover-elevate shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          data-testid="button-back-to-home"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>

        {/* Project header */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-medium text-foreground leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Project details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 bg-card rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Client</h3>
              <p className="text-muted-foreground">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Year</h3>
              <p className="text-muted-foreground">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Duration</h3>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Team</h3>
              <p className="text-muted-foreground">{project.team.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-1">Category</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Main project image */}
        <div className="mb-12">
          <img 
            src={getProjectImage(project.image)} 
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Challenge, Solution, Outcome */}
        <div className="space-y-12 mb-12">
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-4">The Outcome</h2>
            <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        {/* Detailed sections */}
        <div className="space-y-12">
          {project.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-medium text-foreground mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Navigation to other projects */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <Button 
              onClick={() => {
                navigate("/");
                // Use a small delay to ensure navigation completes, then scroll
                setTimeout(() => {
                  const element = document.getElementById('work');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              data-testid="button-view-more-projects"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}