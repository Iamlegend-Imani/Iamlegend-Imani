'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [brightness, setBrightness] = useState(72);
  const [opacity, setOpacity] = useState(88);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('imani-theme');
    const savedBrightness = Number(window.localStorage.getItem('imani-brightness'));
    const savedOpacity = Number(window.localStorage.getItem('imani-opacity'));

    const nextTheme: Theme = savedTheme === 'light' ? 'light' : 'dark';
    const nextBrightness = Number.isFinite(savedBrightness) && savedBrightness >= 35 && savedBrightness <= 100 ? savedBrightness : 72;
    const nextOpacity = Number.isFinite(savedOpacity) && savedOpacity >= 45 && savedOpacity <= 100 ? savedOpacity : 88;

    setTheme(nextTheme);
    setBrightness(nextBrightness);
    setOpacity(nextOpacity);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.setProperty('--ambient-strength', String(nextBrightness / 100));
    document.documentElement.style.setProperty('--surface-opacity', `${nextOpacity}%`);
  }, []);

  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('imani-theme', nextTheme);
  }

  function changeBrightness(value: number) {
    setBrightness(value);
    document.documentElement.style.setProperty('--ambient-strength', String(value / 100));
    window.localStorage.setItem('imani-brightness', String(value));
  }

  function changeOpacity(value: number) {
    setOpacity(value);
    document.documentElement.style.setProperty('--surface-opacity', `${value}%`);
    window.localStorage.setItem('imani-opacity', String(value));
  }

  return (
    <div className="atmosphereControl">
      <button
        className="themeToggle"
        type="button"
        aria-expanded={open}
        aria-controls="atmosphere-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <span>Atmosphere</span>
        <span className="themeDot" aria-hidden="true" />
      </button>

      {open ? (
        <div className="atmospherePanel" id="atmosphere-panel">
          <div className="atmosphereHeading">
            <span>Atmosphere</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close atmosphere controls">×</button>
          </div>

          <div className="themeSegment" role="group" aria-label="Color theme">
            <button type="button" className={theme === 'dark' ? 'active' : ''} onClick={() => chooseTheme('dark')}>Dark</button>
            <button type="button" className={theme === 'light' ? 'active' : ''} onClick={() => chooseTheme('light')}>Light</button>
          </div>

          <label className="atmosphereSlider">
            <span><b>Brightness</b><output>{brightness}%</output></span>
            <input
              type="range"
              min="35"
              max="100"
              value={brightness}
              onChange={(event) => changeBrightness(Number(event.target.value))}
            />
          </label>

          <label className="atmosphereSlider">
            <span><b>Opacity</b><output>{opacity}%</output></span>
            <input
              type="range"
              min="45"
              max="100"
              value={opacity}
              onChange={(event) => changeOpacity(Number(event.target.value))}
            />
          </label>

          <p>Shape the light and translucency of the interface.</p>
        </div>
      ) : null}
    </div>
  );
}
