import { useState, useEffect } from 'react';
import type { Profile } from '../types/profile';
import { dataService } from '../services/dataService';

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const data = await dataService.getProfile();
        setProfile(data);
        setError(null);
      } catch (err) {
        setError('Помилка завантаження профілю');
        console.error('Error loading profile:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { profile, loading, error };
};
