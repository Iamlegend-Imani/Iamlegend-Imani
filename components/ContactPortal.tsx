'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const EMAIL = 'imani.kirika.me@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/imanikir/';
const SUBJECT = "Let's connect";

function gmailUrl() {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: EMAIL,
    su: SUBJECT,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export default function ContactPortal({ label = 'Contact Imani', className = '' }: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt('Copy this email address:', EMAIL);
    }
  }

  const modal = open && mounted ? createPortal(
    <div
      className="contactPortalBackdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) setOpen(false);
      }}
    >
      <section className="contactPortal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
        <div className="contactPortalGlow" aria-hidden="true" />
        <div className="contactPortalTop">
          <span>Open a channel</span>
          <button className="contactPortalDesktopClose" type="button" onClick={() => setOpen(false)} aria-label="Close contact options">×</button>
        </div>
        <p className="contactPortalEyebrow">CONTACT IMANI</p>
        <h2 id="contact-title">Choose how you want to reach me.</h2>
        <p className="contactPortalIntro">Use Gmail, your device&apos;s mail app, LinkedIn, or copy the address. No dead-end button.</p>

        <div className="contactPortalOptions">
          <a href={gmailUrl()} target="_blank" rel="noreferrer">
            <span>01</span>
            <strong>Open Gmail</strong>
            <em>↗</em>
          </a>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}>
            <span>02</span>
            <strong>Default mail app</strong>
            <em>↗</em>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            <span>03</span>
            <strong>LinkedIn</strong>
            <em>↗</em>
          </a>
          <button type="button" onClick={copyEmail}>
            <span>04</span>
            <strong>{copied ? 'Copied' : 'Copy email'}</strong>
            <em>{copied ? '✓' : '＋'}</em>
          </button>
        </div>

        <button className="contactPortalMobileClose" type="button" onClick={() => setOpen(false)} aria-label="Close contact options">×</button>
      </section>
    </div>,
    document.body,
  ) : null;

  return (
    <>
      <button type="button" className={`contactTrigger ${className}`.trim()} onClick={() => setOpen(true)}>
        {label}
      </button>
      {modal}
    </>
  );
}
