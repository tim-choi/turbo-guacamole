import { useLocation } from "wouter";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@shared/projects.ts";
import { getProjectImage } from "@/lib/projectImages";

const projects = getAllProjects();

export default function WorkSection() {
  const [, navigate] = useLocation();

  const handleProjectClick = (projectId: string) => {
    console.log('Opening project details for:', projectId);
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="work" className="w-full py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={getProjectImage(project.image)}
              tags={project.tags}
              category={project.category}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}