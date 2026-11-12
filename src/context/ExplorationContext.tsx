import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

interface ExplorationContextType {
  exploredSlugs: string[];
  completedSlugs: string[];
  quizCompleted: boolean;
  waterDetectiveUnlocked: boolean;
  recipientName: string;
  totalExploredCount: number;
  totalRelicsCount: number;
  progressPercentage: number;
  isLunarPioneerUnlocked: boolean;
  isCertificateAvailable: boolean;
  markRelicExplored: (slug: string) => void;
  markRelicCompleted: (slug: string) => void;
  completeQuiz: () => void;
  setRecipientName: (name: string) => void;
  getRelicStatus: (slug: string) => 'not_explored' | 'explored' | 'completed';
  resetProgress: () => void;
}

export const CANONICAL_SEVEN_SLUGS = [
  'spirit-rover',
  'opportunity-rover',
  'insight-lander',
  'ingenuity-helicopter',
  'apollo-11-descent-stage',
  'surveyor-3',
  'lunar-roving-vehicle'
] as const;

const STORAGE_KEY = 'ghosts_of_the_void_progress_v1';
const TOTAL_RELICS = 7;
const LUNAR_SLUGS = ['apollo-11-descent-stage', 'surveyor-3', 'lunar-roving-vehicle'];

const ExplorationContext = createContext<ExplorationContextType | undefined>(undefined);

export const ExplorationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [exploredSlugs, setExploredSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_explored`);
      if (!saved) return [];
      const parsed: string[] = JSON.parse(saved);
      // Strictly sanitize to the 7 canonical relics only
      return Array.isArray(parsed)
        ? parsed.filter((s) => CANONICAL_SEVEN_SLUGS.includes(s as any))
        : [];
    } catch {
      return [];
    }
  });

  const [completedSlugs, setCompletedSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_completed`);
      if (!saved) return [];
      const parsed: string[] = JSON.parse(saved);
      return Array.isArray(parsed)
        ? parsed.filter((s) => CANONICAL_SEVEN_SLUGS.includes(s as any))
        : [];
    } catch {
      return [];
    }
  });

  const [quizCompleted, setQuizCompleted] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_quiz`);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [waterDetectiveUnlocked, setWaterDetectiveUnlocked] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_water_detective`);
      return saved === 'true';
    } catch {
      return false;
    }
  });

  const [recipientName, setRecipientNameState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_recipient_name`);
      return saved && saved.trim() ? saved : 'SPACE EXPLORER';
    } catch {
      return 'SPACE EXPLORER';
    }
  });

  // Persist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_explored`, JSON.stringify(exploredSlugs));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [exploredSlugs]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_completed`, JSON.stringify(completedSlugs));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [completedSlugs]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_quiz`, String(quizCompleted));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [quizCompleted]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_water_detective`, String(waterDetectiveUnlocked));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [waterDetectiveUnlocked]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_recipient_name`, recipientName);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [recipientName]);

  const markRelicExplored = (slug: string) => {
    if (!CANONICAL_SEVEN_SLUGS.includes(slug as any)) return;
    setExploredSlugs((prev) => {
      if (prev.includes(slug)) return prev;
      return [...prev, slug];
    });
  };

  const markRelicCompleted = (slug: string) => {
    if (!CANONICAL_SEVEN_SLUGS.includes(slug as any)) return;
    setExploredSlugs((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
    setCompletedSlugs((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
  };

  const completeQuiz = () => {
    setQuizCompleted(true);
    setWaterDetectiveUnlocked(true);
  };

  const setRecipientName = (name: string) => {
    setRecipientNameState(name);
  };

  const getRelicStatus = (slug: string): 'not_explored' | 'explored' | 'completed' => {
    if (completedSlugs.includes(slug)) return 'completed';
    if (exploredSlugs.includes(slug)) return 'explored';
    return 'not_explored';
  };

  const isLunarPioneerUnlocked = useMemo(() => {
    return LUNAR_SLUGS.every((slug) => exploredSlugs.includes(slug));
  }, [exploredSlugs]);

  // Certificate is available after completing Spirit Rover or exploring it
  const isCertificateAvailable = useMemo(() => {
    return exploredSlugs.includes('spirit-rover') || completedSlugs.includes('spirit-rover');
  }, [exploredSlugs, completedSlugs]);

  const totalExploredCount = exploredSlugs.length;
  const progressPercentage = Math.round((totalExploredCount / TOTAL_RELICS) * 100);

  const resetProgress = () => {
    setExploredSlugs([]);
    setCompletedSlugs([]);
    setQuizCompleted(false);
    setWaterDetectiveUnlocked(false);
    setRecipientNameState('SPACE EXPLORER');
    try {
      localStorage.removeItem(`${STORAGE_KEY}_explored`);
      localStorage.removeItem(`${STORAGE_KEY}_completed`);
      localStorage.removeItem(`${STORAGE_KEY}_quiz`);
      localStorage.removeItem(`${STORAGE_KEY}_water_detective`);
      localStorage.removeItem(`${STORAGE_KEY}_recipient_name`);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  return (
    <ExplorationContext.Provider
      value={{
        exploredSlugs,
        completedSlugs,
        quizCompleted,
        waterDetectiveUnlocked,
        recipientName,
        totalExploredCount,
        totalRelicsCount: TOTAL_RELICS,
        progressPercentage,
        isLunarPioneerUnlocked,
        isCertificateAvailable,
        markRelicExplored,
        markRelicCompleted,
        completeQuiz,
        setRecipientName,
        getRelicStatus,
        resetProgress
      }}
    >
      {children}
    </ExplorationContext.Provider>
  );
};

export const useExploration = () => {
  const context = useContext(ExplorationContext);
  if (!context) {
    throw new Error('useExploration must be used within an ExplorationProvider');
  }
  return context;
};
