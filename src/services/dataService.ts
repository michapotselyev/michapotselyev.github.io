import type { Profile, Project } from '../types/profile';
import profileData from '../data/profile.json';
import projectsData from '../data/projects.json';

export class DataService {
  private static instance: DataService;

  private constructor() {}

  public static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }

  public async getProfile(): Promise<Profile> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return profileData as Profile;
  }

  public async getProjects(): Promise<Project[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return projectsData as Project[];
  }

  public async getProjectById(id: number): Promise<Project | null> {
    const projects = await this.getProjects();
    return projects.find(project => project.id === id) || null;
  }

  public async searchProjects(query: string): Promise<Project[]> {
    const projects = await this.getProjects();
    const lowerQuery = query.toLowerCase();
    
    return projects.filter(project => 
      project.name.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
    );
  }

  public async getProjectsByTechnology(technology: string): Promise<Project[]> {
    const projects = await this.getProjects();
    const lowerTech = technology.toLowerCase();
    
    return projects.filter(project =>
      project.technologies.some(tech => tech.toLowerCase().includes(lowerTech))
    );
  }
}

export const dataService = DataService.getInstance();
