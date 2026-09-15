import type { Project } from '../data/projects';

export function getFeaturedProjects(projects: Project[], limit = 3): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}
