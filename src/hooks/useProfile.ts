import { useState, useEffect } from 'react';
import type { Profile } from '../types/profile';
import profileData from '../data/profile.json';

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        // В реальном приложении здесь был бы fetch
        // Для демонстрации используем импортированные данные
        setProfile(profileData as Profile);
      } catch (err) {
        setError('Помилка завантаження даних профілю');
        console.error('Error loading profile:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { profile, loading, error };
};
