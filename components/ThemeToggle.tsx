'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type Energy = 'grounded' | 'electric' | 'radiant';

const BASE_BRIGHTNESS = 72;

function applyBrightness(value: number) {
  const root = document.documentElement;
  if (value < BASE_BRIGHTNESS) {
    const alpha = ((BASE_BRIGHTNESS - value) / (BASE_BRIGHTNESS - 30)) * 0.48;
    root.style.setProperty('--screen-tint', '0, 0, 0');
    root.style.setProperty('--screen-overlay', alpha.toFixed(3));
  } else {
    const alpha = ((value - BASE_BRIGHTNESS) / (100 - BASE_BRIGHTNESS)) * 0.2;
    root.style.setProperty('--screen-tint', '255, 248, 232');
    root.style.setProperty('--screen-overlay', alpha.toFixed(3));
  }
}

function applyPulse(value: number) {
  const root = document.documentElement;
  const duration = 18 - (value / 100) * 12;
  const scale = 1 + (value / 100) * 0.075;
  const drift = 4 + (value / 100) * 18;
  root.style.setProperty('--pulse-duration', `${duration.toFixed(1)}s`);
  root.style.setProperty('--pulse-scale', scale.toFixed(3));
  root.style.setProperty('--pulse-drift', `${drift.toFixed(1)}px`);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [brightness, setBrightness] = useState(BASE_BRIGHTNESS);
  const [opacity, setOpacity] = useState(78);
  const [pulse, setPulse] = useState(42);
  const [energy, setEnergy] = useState<Energy>('grounded');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('imani-theme');
    const savedBrightness = Number(window.localStorage.getItem('imani-brightness'));
    const savedOpacity = Number(window.localStorage.getItem('imani-opacity'));
    const savedPulse = Number(window.localStorage.getItem('imani-pulse'));
    const savedEnergy = window.localStorage.getItem('imani-energy');

    const nextTheme: Theme = savedTheme === 'light' ? 'light' : 'dark';
    const nextBrightness = Number.isFinite(savedBrightness) && savedBrightness >= 30 && savedBrightness <= 100 ? savedBrightness : BASE_BRIGHTNESS;
    const nextOpacity = Number.isFinite(savedOpacity) && savedOpacity >= 35 && savedOpacity <= 100 ? savedOpacity : 78;
    const nextPulse = Number.isFinite(savedPulse) && savedPulse >= 0 && savedPulse <= 100 ? savedPulse : 42;
    const nextEnergy: Energy = savedEnergy === 'electric' || savedEnergy === 'radiant' ? savedEnergy : 'grounded';

    setTheme(nextTheme);
    setBrightness(nextBrightness);
    setOpacity(nextOpacity);
    setPulse(nextPulse);
    setEnergy(nextEnergy);

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.dataset.energy = nextEnergy;
    document.documentElement.style.setProperty('--surface-opacity', `${nextOpacity}%`);
    document.documentElement.style.setProperty('--ambient-strength', String(0.46 + nextBrightness / 185));
    applyBrightness(nextBrightness);
    applyPulse(nextPulse);
  }, []);

  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('imani-theme', nextTheme);
  }

  function changeBrightness(value: number) {
    setBrightness(value);
    applyBrightness(value);
    document.documentElement.style.setProperty('--ambient-strength', String(0.46 + value / 185));
    window.localStorage.setItem('imani-brightness', String(value));
  }

  function changeOpacity(value: number) {
    setOpacity(value);
    document.documentElement.style.setProperty('--surface-opacity', `${value}%`);
    window.localStorage.setItem('imani-opacity', String(value));
  }

  function changePulse(value: number) {
    setPulse(value);
    applyPulse(value);
    window.localStorage.setItem('imani-pulse', String(value));
  }

  function chooseEnergy(nextEnergy: Energy) {
    setEnergy(nextEnergy);
    document.documentElement.dataset.energy = nextEnergy;
    window.localStorage.setItem('imani-energy', nextEnergy);
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
            <div>
              <span>Atmosphere</span>
              <small>Tune the room.</small>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close atmosphere controls">×</button>
          </div>

          <div className="themeSegment" role="group" aria-label="Color theme">
            <button type="button" className={theme === 'dark' ? 'active' : ''} onClick={() => chooseTheme('dark')}>Dark</button>
            <button type="button" className={theme === 'light' ? 'active' : ''} onClick={() => chooseTheme('light')}>Light</button>
          </div>

          <div className="energyLabel">Energy</div>
          <div className="energySegment" role="group" aria-label="Atmosphere energy">
            <button type="button" className={energy === 'grounded' ? 'active' : ''} onClick={() => chooseEnergy('grounded')}><span>Grounded</span><small>structure</small></button>
            <button type="button" className={energy === 'electric' ? 'active' : ''} onClick={() => chooseEnergy('electric')}><span>Electric</span><small>futurism</small></button>
            <button type="button" className={energy === 'radiant' ? 'active' : ''} onClick={() => chooseEnergy('radiant')}><span>Radiant</span><small>warmth</small></button>
          </div>

          <label className="atmosphereSlider">
            <span><b>Brightness</b><output>{brightness}%</output></span>
            <input type="range" min="30" max="100" value={brightness} onChange={(event) => changeBrightness(Number(event.target.value))} />
          </label>

          <label className="atmosphereSlider">
            <span><b>Opacity</b><output>{opacity}%</output></span>
            <input type="range" min="35" max="100" value={opacity} onChange={(event) => changeOpacity(Number(event.target.value))} />
          </label>

          <label className="atmosphereSlider">
            <span><b>Pulse</b><output>{pulse}%</output></span>
            <input type="range" min="0" max="100" value={pulse} onChange={(event) => changePulse(Number(event.target.value))} />
          </label>

          <p>Brightness changes the luminance of the whole experience. Opacity reveals more or less of the atmosphere beneath the surfaces. Pulse controls how alive the ambient field feels.</p>
        </div>
      ) : null}
    </div>
  );
}
