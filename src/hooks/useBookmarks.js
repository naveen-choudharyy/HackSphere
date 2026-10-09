import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'hacksphere_saved_hackathons';

/**
 * Custom hook to safely manage hackathon bookmarks in browser localStorage.
 * Includes defensive fallback when localStorage is blocked or throws an error.
 */
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return [];
      }
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.warn('Could not read bookmarks from localStorage:', err);
      return [];
    }
  });

  // Sync state to localStorage safely
  const persistBookmarks = useCallback((newBookmarks) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookmarks));
      }
    } catch (err) {
      console.warn('Could not write bookmarks to localStorage:', err);
    }
  }, []);

  // Listen to cross-tab storage changes
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY) {
        try {
          const updated = e.newValue ? JSON.parse(e.newValue) : [];
          if (Array.isArray(updated)) {
            setBookmarks(updated);
          }
        } catch {
          // ignore parsing error
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleBookmark = useCallback((id) => {
    setBookmarks((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      persistBookmarks(updated);
      return updated;
    });
  }, [persistBookmarks]);

  const isBookmarked = useCallback((id) => {
    return bookmarks.includes(id);
  }, [bookmarks]);

  const clearAllBookmarks = useCallback(() => {
    setBookmarks([]);
    persistBookmarks([]);
  }, [persistBookmarks]);

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    clearAllBookmarks
  };
}
