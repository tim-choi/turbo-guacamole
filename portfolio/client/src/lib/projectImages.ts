// client/src/lib/projectImages.ts

import designerHero from '@assets/generated_images/Designer_workspace_hero_image_bdd6e84c.png';

export const projectImages: Record<string, string> = {
  // public image that lives under client/public/images
  'hawaii-app': '/images/hsdoe.png',
  'med-app': '/images/medminder.png',
  'study-app': '/images/studymeets.png',
  'brumbl-app': '/images/brumbl.png',


  // placeholder
  'placeholder': designerHero,
};

export const getProjectImage = (imageKey: string): string => {
  return projectImages[imageKey] || projectImages['placeholder'];
};

export default projectImages;
