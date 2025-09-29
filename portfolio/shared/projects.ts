import { Project } from "./schema";

// Project data - centralized source of truth for portfolio projects
export const projects: Project[] = [
{
    id: "1",
    title: "Hawaii DOE Internal Management System",
    description: "Full-stack web application streamlining internal processes for the Department of Education.",
    fullDescription: "A comprehensive internal management system designed to modernize the Hawaii State Department of Education's workflow processes. The application bridges the gap between legacy systems and modern user expectations, providing educators and administrators with intuitive tools for daily operations.",
    image: "education-dashboard", // Reference key for image imports
    tags: ["FULL-STACK", "USER EXPERIENCE", "AGILE DEVELOPMENT"],
    category: "Enterprise / Government",
    client: "Hawaii State Department of Education",
    year: "2024",
    duration: "3 months",
    role: "Software Engineering Intern",
    team: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Product Manager"],
    challenge: "The DOE needed to modernize their internal processes with a user-friendly system that could handle complex educational data while maintaining security standards required for government applications.",
    solution: "Developed a full-stack solution using React for intuitive frontend interfaces, Express.js for robust backend operations, and Firebase for scalable data management, all within an Agile development framework.",
    outcome: "Successfully delivered a functional internal application that streamlined administrative workflows and improved user satisfaction among DOE staff by providing modern, responsive interfaces.",
    sections: [
      {
        title: "Design Challenge",
        content: "The primary design challenge was creating an intuitive interface for users with varying levels of technical expertise while maintaining the security and functionality requirements of a government system. We needed to balance accessibility with comprehensive feature sets."
      },
      {
        title: "User-Centered Approach",
        content: "Through stakeholder interviews and user testing sessions with DOE staff, we identified key pain points in existing workflows. The design prioritized clear navigation, consistent visual hierarchy, and responsive layouts that worked across different devices used throughout the organization."
      },
      {
        title: "Technical Implementation",
        content: "The frontend was built with React to ensure component reusability and maintainability. We implemented a design system that ensured consistency across all application modules while allowing for future scalability and feature additions."
      },
      {
        title: "Impact & Results",
        content: "The application successfully modernized internal processes, reducing administrative overhead and improving data accessibility for educators. The responsive design ensured seamless usage across desktop and mobile devices, increasing overall system adoption."
      }
    ]
  },
  {
    id: "2",
    title: "StudyMeets - Social Learning Platform",
    description: "React Native mobile app connecting students for collaborative summer project work.",
    fullDescription: "StudyMeets addresses the challenge of student isolation during summer breaks by creating a platform where learners can find like-minded peers for collaborative projects. The app combines social networking principles with educational goals to foster meaningful academic connections.",
    image: "social-mobile-app", // Reference key for image imports
    tags: ["MOBILE DESIGN", "SOCIAL PLATFORM", "REACT NATIVE"],
    category: "Mobile / Social",
    client: "UCSB Computer Science Course Project",
    year: "2024",
    duration: "10 weeks",
    role: "Frontend Developer & UX Designer",
    team: ["Mobile Developer", "Backend Developer", "UI Designer", "Product Manager", "QA Tester", "Firebase Specialist", "Scrum Master"],
    challenge: "Students struggled to find collaborators for summer projects, leading to missed learning opportunities and isolation. Existing platforms were either too formal or lacked features specific to academic collaboration.",
    solution: "Created a mobile-first social platform with intuitive matching algorithms, real-time messaging, and project management tools specifically designed for student collaboration and summer learning initiatives.",
    outcome: "Delivered a fully functional mobile app with seamless user onboarding, effective matching systems, and real-time communication features that enhanced student engagement and project collaboration opportunities.",
    sections: [
      {
        title: "User Experience Design",
        content: "The design focused on creating an approachable, non-intimidating platform for students to connect. We implemented a card-based interface for browsing potential collaborators, with clear visual indicators for skills, interests, and project types to facilitate meaningful matches."
      },
      {
        title: "Mobile-First Approach",
        content: "Recognizing that students primarily use mobile devices, we prioritized mobile user experience with touch-friendly interfaces, intuitive navigation patterns, and optimized performance for various device sizes and capabilities."
      },
      {
        title: "Real-Time Features",
        content: "Integrated Firebase real-time database to enable instant messaging and live updates on project status. The design emphasized clear communication flows and notification systems to keep users engaged without being overwhelming."
      },
      {
        title: "Community Building",
        content: "The platform's design encouraged community formation through features like project showcases, skill-based matching, and collaborative workspaces. Visual design elements promoted trust and academic focus while maintaining social engagement."
      }
    ]
  },
  {
    id: "3",
    title: "Medminder - Digital Healthcare Management",
    description: "Comprehensive web application for medication tracking and healthcare scheduling.",
    fullDescription: "Medminder transforms healthcare management by providing patients with a centralized platform for medication tracking, appointment scheduling, and health monitoring. The application addresses the growing need for digital health solutions that empower patients to take control of their healthcare journey.",
    image: "healthcare-dashboard", // Reference key for image imports
    tags: ["HEALTHCARE UX", "WEB APPLICATION", "API INTEGRATION"],
    category: "Healthcare / Web Platform",
    client: "UCSB Computer Science Course Project",
    year: "2024",
    duration: "10 weeks",
    role: "Full-Stack Developer & UX Designer",
    team: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Product Manager", "API Specialist", "QA Tester", "Scrum Master"],
    challenge: "Patients often struggle with medication adherence and healthcare appointment management, leading to poor health outcomes. Existing solutions were fragmented and lacked comprehensive integration with calendar systems.",
    solution: "Developed a responsive web application with Google Calendar API integration, medication tracking systems, and notification features designed with accessibility and user safety as primary considerations.",
    outcome: "Created a fully functional healthcare management platform with intuitive medication tracking, seamless calendar integration, and user-friendly interfaces that improved medication adherence and appointment management.",
    sections: [
      {
        title: "Healthcare-Focused Design",
        content: "The design prioritized clarity and accessibility, understanding that users might be managing complex health conditions. We implemented large, readable typography, high contrast color schemes, and simplified navigation patterns suitable for users of all ages and technical abilities."
      },
      {
        title: "User Authentication & Security",
        content: "Given the sensitive nature of health data, we designed robust authentication flows and secure data handling processes. The user interface clearly communicated security measures while maintaining ease of use for daily medication and appointment management."
      },
      {
        title: "Calendar Integration",
        content: "Seamless integration with Google Calendar API required careful UX design to ensure users could easily sync appointments without confusion. We created intuitive scheduling interfaces that respected existing user workflows while adding healthcare-specific functionality."
      },
      {
        title: "Responsive Design System",
        content: "The application was built with a comprehensive responsive design system ensuring consistent user experience across desktop, tablet, and mobile devices. This was crucial for medication reminders and appointment access on-the-go."
      }
    ]
  },
  {
    id: "4",
    title: "Brumbl - Campus Food Delivery Service",
    description: "End-to-end business solution for campus-based brownie delivery with integrated marketing.",
    fullDescription: "Brumbl represents a complete entrepreneurial venture that combined food service, digital marketing, and operations management. The project demonstrates how design thinking and business strategy can create successful campus-based services while building brand recognition and customer loyalty.",
    image: "food-delivery-brand", // Reference key for image imports
    tags: ["BRAND DESIGN", "SOCIAL MEDIA", "BUSINESS STRATEGY"],
    category: "Entrepreneurship / Brand Design",
    client: "Independent Venture",
    year: "2025",
    duration: "2 months",
    role: "Co-Founder, Brand Designer & Operations Manager",
    team: ["Co-Founder", "Marketing Specialist", "Delivery Coordinator", "Social Media Manager"],
    challenge: "Creating a recognizable brand and efficient delivery service in a competitive campus food market while maintaining quality standards and building customer loyalty within a limited timeframe.",
    solution: "Developed comprehensive brand identity, implemented strategic social media marketing campaigns, and created efficient operational systems that prioritized customer experience and brand consistency.",
    outcome: "Generated $1.5k profit in one month through effective brand positioning, social media engagement, and operational excellence, establishing a strong campus presence and loyal customer base.",
    sections: [
      {
        title: "Brand Identity Design",
        content: "Created a memorable brand identity that resonated with college students, focusing on approachable, fun visual elements while maintaining professionalism. The brand design emphasized quality, reliability, and the personal touch of a student-run business."
      },
      {
        title: "Social Media Strategy",
        content: "Designed and executed social media campaigns that leveraged visual storytelling and community engagement. Created consistent visual content that showcased products while building brand personality and encouraging user-generated content and repeat customers."
      },
      {
        title: "Operations Design",
        content: "Developed efficient operational workflows including menu rotation strategies, order management systems, and delivery logistics. The design of these systems prioritized customer satisfaction while maintaining scalable processes for business growth."
      },
      {
        title: "Customer Experience",
        content: "Every touchpoint was designed to reinforce brand values and ensure positive customer experiences. From initial social media contact through delivery, we created consistent, high-quality interactions that built trust and encouraged repeat business."
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