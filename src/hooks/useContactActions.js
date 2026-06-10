import { useState, useCallback } from 'react';
import { CONTACTS } from '../components/mailbox/contacts';

export function useContactActions() {
  const [active, setActive] = useState(null);
  const [copied, setCopied] = useState(null);

  const handleCopy = useCallback((key, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1400);
    });
  }, []);

  const activeContact = active ? CONTACTS.find(c => c.key === active) : null;

  return { active, setActive, copied, handleCopy, activeContact, contacts: CONTACTS };
}
