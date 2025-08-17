export interface Contact {
  email: string;
  phone: string;
  city: string;
  linkedin: string;
  github: string;
  telegram: string;
}

export interface Skills {
  main: string[];
  technical: string[];
}

export interface Education {
  title: string;
  period: string;
  location: string;
}

export interface Experience {
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface GitHub {
  username: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  contact: Contact;
  skills: Skills;
  education: Education[];
  experience: Experience[];
  extras: string[];
  github: GitHub;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  watchers_count: number;
  topics: string[];
  updated_at: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
  stars: number;
  forks: number;
}
