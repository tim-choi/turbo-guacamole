// shared/assets.ts
// Use bundler-safe URLs for images that live in the repo. Keep public `/images/*` entries
// as absolute paths (these are served from `client/public/images`).
export const projectImages: Record<string, string> = {
  // public image (served from client/public/images)
  // Use an absolute public path so the browser requests `/images/hsdoe.png` from the dev server.
  'hawaii-app': '/images/hsdoe.png',
  'study-app': '/images/studymeets.png',
  'med-app': '/images/medminder.png',

  // generated/attached images - use `new URL` so Vite/node can resolve these when imported
  'dashboard': new URL('../attached_assets/generated_images/Web_dashboard_mockup_d7ae12cb.png', import.meta.url).href,
  'healthcare-dashboard': new URL('../attached_assets/generated_images/Web_dashboard_mockup_d7ae12cb.png', import.meta.url).href,
  'food-delivery-brand': new URL('../attached_assets/generated_images/Designer_workspace_hero_image_bdd6e84c.png', import.meta.url).href,

  // placeholder used as a safe default when a key is missing
  'placeholder': new URL('../attached_assets/generated_images/Designer_workspace_hero_image_bdd6e84c.png', import.meta.url).href,
};

export const getProjectImage = (imageKey: string): string => {
  return projectImages[imageKey] || projectImages['placeholder'];
};