import { Project } from "./schema";

// Project data - centralized source of truth for portfolio projects
export const projects: Project[] = [
  {
    id: "1",
    title: "Building a Website Concept Through Fast-Paced Workshops",
    description: "How to act strategically despite limited time and budget.",
    fullDescription: "In today's fast-paced digital environment, organizations often face the challenge of creating effective web solutions under tight time constraints and budget limitations. This case study explores how strategic thinking and efficient workshop methodologies can overcome these obstacles to deliver impactful results.",
    image: "mobile-app", // Reference key for image imports
    tags: ["FACILITATION", "WEB DESIGN", "BRANDING"],
    category: "Research / Process Design",
    client: "TechStartup Inc.",
    year: "2023",
    duration: "3 weeks",
    role: "Lead UX Designer",
    team: ["UX Designer", "Frontend Developer", "Product Manager"],
    challenge: "The client needed a complete website redesign within a limited timeframe and budget, while ensuring stakeholder alignment and user-centered design principles.",
    solution: "Implemented a series of rapid design workshops combining design thinking methodology with agile practices to streamline the design process.",
    outcome: "Delivered a fully functional website concept that increased user engagement by 40% and reduced bounce rate by 25%.",
    sections: [
      {
        title: "Project Overview",
        content: "This project focused on reimagining how organizations can approach web design projects when faced with significant constraints. By leveraging collaborative workshops and rapid prototyping techniques, we were able to maintain design quality while meeting aggressive deadlines."
      },
      {
        title: "Design Process",
        content: "The process began with stakeholder interviews to understand business objectives, followed by user research to identify key pain points. We then conducted collaborative design workshops where all team members contributed to ideation and solution development."
      },
      {
        title: "Key Insights",
        content: "The most significant insight was that involving all stakeholders in the design process from the beginning dramatically reduced revision cycles and ensured buy-in throughout the project timeline."
      },
      {
        title: "Results & Impact",
        content: "The final solution not only met the initial requirements but exceeded expectations in terms of user engagement and business metrics. The workshop methodology has since been adopted as a standard practice for similar projects."
      }
    ]
  },
  {
    id: "2", 
    title: "An Approach to Multi-Device Design",
    description: "Responsive design principles for modern web applications.",
    fullDescription: "As users increasingly interact with digital products across multiple devices, creating seamless experiences that work beautifully on desktop, tablet, and mobile has become essential. This project explores innovative approaches to multi-device design that go beyond traditional responsive techniques.",
    image: "dashboard", // Reference key for image imports
    tags: ["RESEARCH", "PRODUCT DESIGN"],
    category: "Case Study",
    client: "DataFlow Analytics",
    year: "2023",
    duration: "6 weeks",
    role: "Senior UX/UI Designer",
    team: ["UX Designer", "UI Designer", "Frontend Developer", "QA Engineer"],
    challenge: "Design a complex data visualization dashboard that provides consistent functionality and user experience across all device types while maintaining performance and usability.",
    solution: "Developed a progressive disclosure system with adaptive layouts that prioritize core functionality on smaller screens while progressively revealing advanced features on larger displays.",
    outcome: "Achieved 95% feature parity across devices with significantly improved mobile usage metrics and user satisfaction scores.",
    sections: [
      {
        title: "Research & Discovery", 
        content: "Extensive user research revealed that mobile users had different interaction patterns and information priorities compared to desktop users, requiring a fundamental rethinking of traditional responsive design approaches."
      },
      {
        title: "Design Strategy",
        content: "We implemented a 'mobile-first, feature-complete' strategy where every feature available on desktop had a mobile equivalent, though the interaction patterns and information architecture were optimized for each context."
      },
      {
        title: "Technical Innovation",
        content: "Developed a novel component system that adapts not just to screen size but to device capabilities, input methods, and user context, creating truly device-aware interfaces."
      },
      {
        title: "Measuring Success",
        content: "Post-launch metrics showed a 60% increase in mobile engagement, with users completing complex tasks on mobile devices at rates previously only seen on desktop platforms."
      }
    ]
  }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get all projects (for listing)
export const getAllProjects = (): Project[] => {
  return projects;
};