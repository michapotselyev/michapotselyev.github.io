import { useState } from 'react';
import type { GitHubRepo } from '../types/profile';

export const useGitHubRepos = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRepos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data: GitHubRepo[] = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Не знайдено репозиторіїв');
      }

      setRepos(data.slice(0, 6));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Помилка завантаження');
      console.error('Error loading GitHub repos:', err);
    } finally {
      setLoading(false);
    }
  };

  return { repos, loading, error, loadRepos };
};
