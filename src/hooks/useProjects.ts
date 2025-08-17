import { useState, useEffect } from 'react';
import type { Project } from '../types/profile';
import { dataService } from '../services/dataService';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await dataService.getProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Помилка завантаження проєктів');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
};
