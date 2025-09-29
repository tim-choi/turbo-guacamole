import { getAllProjects } from '../shared/projects';

const projects = getAllProjects();

projects.forEach((p) => {
  console.log(`${p.id} -> ${p.image}`);
});
