'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('imani-theme');
    const nextTheme = saved === 'light' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('imani-theme', nextTheme);
  }

  return (
    <button className="themeToggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      <span className="themeDot" aria-hidden="true" />
    </button>
  );
}
