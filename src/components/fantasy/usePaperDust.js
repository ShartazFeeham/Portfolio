import { useMemo } from 'react';

export function usePaperDust(coverLabel) {
  return useMemo(() => {
    let seed = 0;
    for (let i = 0; i < coverLabel.length; i++) seed += coverLabel.charCodeAt(i);
    const rand = () => { const x = Math.sin(seed++) * 10000; return x - Math.floor(x); };
    const vars = {};
    for (let i = 1; i <= 18; i++) {
      vars[`--pos${i}`] = `${Math.floor(rand() * 100)}% ${Math.floor(rand() * 100)}%`;
    }
    return vars;
  }, [coverLabel]);
}
