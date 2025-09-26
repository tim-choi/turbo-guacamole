// Asset imports - centralized asset management
import mobileAppImage from '@assets/generated_images/Mobile_app_mockup_05fc1705.png';
import dashboardImage from '@assets/generated_images/Web_dashboard_mockup_d7ae12cb.png';

// Image mapping for projects
export const projectImages = {
  'mobile-app': mobileAppImage,
  'dashboard': dashboardImage,
};

// Helper function to get project image
export const getProjectImage = (imageKey: string): string => {
  return projectImages[imageKey as keyof typeof projectImages] || '';
};