import { getAllProjects } from '../shared/projects';
import { getProjectImage } from '../shared/assets';

const projects = getAllProjects();

projects.forEach((p) => {
  console.log(`${p.id} -> ${p.image} -> ${getProjectImage(p.image)}`);
});
