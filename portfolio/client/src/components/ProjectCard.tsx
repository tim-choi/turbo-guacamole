import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  onClick?: () => void;
}

export default function ProjectCard({ title, description, image, tags, category, onClick }: ProjectCardProps) {
  const handleClick = () => {
    console.log('Project card clicked:', title);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className="group cursor-pointer mb-16 transition-all duration-300 hover:-translate-y-2"
      onClick={handleClick}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative overflow-hidden rounded-lg mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300">
        <img 
          src={image}
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // fallback to a placeholder image if the original fails to load
            const target = e.currentTarget as HTMLImageElement;
            const placeholder = '/images/Designer_workspace_hero_image_bdd6e84c.png';
            if (target.src !== placeholder) {
              console.warn(`Image failed to load for project "${title}":`, target.src);
              target.src = placeholder;
            }
          }}
        />
        
        {/* Gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>
        
        {/* Overlay with project info */}
        <div className="absolute top-6 left-6 z-10">
          <div className="text-xs text-white uppercase tracking-wide mb-1 drop-shadow-lg">
            {tags.join(' • ')}
          </div>
        </div>
      </div>
      
      <div className="space-y-4 bg-card rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <h3 className="text-2xl font-medium text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}