import { useState, useCallback } from 'react';
import './ContactSection.css';

const CONTACTS = [
  {
    key: 'email',
    copyText: 'mdfeeham@gmail.com',
    copyLabel: 'Copy email',
    actionLabel: 'Send mail',
    actionHref: 'mailto:mdfeeham@gmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    key: 'github',
    copyText: 'https://github.com/ShartazFeeham',
    copyLabel: 'Copy link',
    actionLabel: 'Visit GitHub',
    actionHref: 'https://github.com/ShartazFeeham',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    key: 'linkedin',
    copyText: 'https://www.linkedin.com/in/shartaz-feeham',
    copyLabel: 'Copy link',
    actionLabel: 'Visit LinkedIn',
    actionHref: 'https://www.linkedin.com/in/shartaz-feeham',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: 'facebook',
    copyText: 'https://facebook.com/ShartazFeeham',
    copyLabel: 'Copy link',
    actionLabel: 'Visit Facebook',
    actionHref: 'https://facebook.com/ShartazFeeham',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const [active, setActive] = useState(null);
  const [copied, setCopied] = useState(null);
  const activeContact = active ? CONTACTS.find(c => c.key === active) : null;

  const handleCopy = useCallback((key, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1400);
    });
  }, []);

  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">CONTACT</a>
      </h2>

      <div className="mailbox-scene">
        <div className="mailbox">
          {/* Lid / roof */}
          <div className="mailbox-lid">
            <div className="mailbox-slot" />
            <div className="mailbox-slot-flap" />
          </div>

          {/* Box body */}
          <div className="mailbox-box">
            {/* Interactive panel: text + icons + actions */}
            <div className="mailbox-panel">
              <div className="mailbox-panel-text">
                <span>Let's connect</span>
              </div>
              <div className="mailbox-panel-icons">
                {CONTACTS.map(contact => (
                  <button
                    key={contact.key}
                    className={`mailbox-icon-btn ${active === contact.key ? 'mailbox-icon-btn--active' : ''}`}
                    onMouseEnter={() => setActive(contact.key)}
                    onClick={() => setActive(contact.key)}
                    aria-label={contact.actionLabel}
                    type="button"
                  >
                    {contact.icon}
                  </button>
                ))}
              </div>
              {activeContact && (
                <div className="mailbox-panel-actions">
                  <button
                    className="mailbox-action-btn"
                    onClick={() => handleCopy(activeContact.key, activeContact.copyText)}
                    type="button"
                  >
                    {copied === activeContact.key ? 'Copied!' : activeContact.copyLabel}
                  </button>
                  <a
                    className="mailbox-action-btn mailbox-action-btn--primary"
                    href={activeContact.actionHref}
                    target={activeContact.external ? '_blank' : undefined}
                    rel={activeContact.external ? 'noopener noreferrer' : undefined}
                  >
                    {activeContact.actionLabel}
                  </a>
                </div>
              )}
            </div>

            {/* Postage stamp */}
            <div className="mailbox-stamp">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className="mailbox-stamp-inner">✉</span>
                <span className="mailbox-stamp-text">Mail me</span>
              </div>
            </div>

            {/* Flag */}
            <div className="mailbox-flag">
              <div className="mailbox-flag-banner" />
              <div className="mailbox-flag-pole" />
            </div>
          </div>

          {/* Post */}
          <div className="mailbox-post" />
        </div>
      </div>
    </section>
  );
}
