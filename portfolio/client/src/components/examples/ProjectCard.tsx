import ProjectCard from '../ProjectCard';
import mobileAppImage from '@assets/generated_images/Mobile_app_mockup_05fc1705.png';

export default function ProjectCardExample() {
  return (
    <div className="max-w-2xl">
      <ProjectCard
        title="Building a Website Concept Through Fast-Paced Workshops"
        description="How to act strategically despite limited time and budget."
        image={mobileAppImage}
        tags={["FACILITATION", "WEB DESIGN", "BRANDING"]}
        category="Workshop Process"
        onClick={() => console.log('Project clicked: Workshop Process')}
      />
    </div>
  );
}