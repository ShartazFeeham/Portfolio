import { useEffect } from "react";

export function useVintageCursor() {
  useEffect(() => {
    const cursors = [
      // A — Fountain pen nib
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%232c2a25' d='M16 2l7 7-8 16-6 2 2-6 16-8-7-7z'/%3E%3Ccircle cx='16' cy='16' r='2.2' fill='%23e8e1cf'/%3E%3Cpath d='M14 18l4-4' stroke='%23e8e1cf' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E",
        x: 6,
        y: 26,
      },
      // B — Quill feather
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 32 32'%3E%3Cpath fill='%235b3a1d' d='M26 6c-7 1-12 6-14 14l-4 6 6-4c8-2 13-7 14-14-1-1-2-2-2-2z'/%3E%3Cpath d='M10 22c6-6 10-10 16-16' stroke='%238a5a34' stroke-width='1.3' stroke-linecap='round' opacity='0.9'/%3E%3Cpath d='M12 23c5.6-5.6 9.4-9.6 15-15' stroke='%238a5a34' stroke-width='0.8' stroke-linecap='round' opacity='0.55'/%3E%3Cpath d='M14 20l-3 3' stroke='%238a5a34' stroke-width='1.2' stroke-linecap='round' opacity='0.9'/%3E%3C/svg%3E",
        x: 4,
        y: 26,
      },
      // C — Wax seal stamp
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 32 32'%3E%3Cpath fill='%235b3a1d' d='M12 2h8v8l-2 2v6h-4v-6l-2-2V2z'/%3E%3Cpath d='M13 3.5h6' stroke='%238a5a34' stroke-width='1.2' stroke-linecap='round'/%3E%3Cpath d='M13 6.5h6' stroke='%238a5a34' stroke-width='1.0' stroke-linecap='round' opacity='0.85'/%3E%3Cpath d='M13 9.5h6' stroke='%238a5a34' stroke-width='0.9' stroke-linecap='round' opacity='0.75'/%3E%3Ccircle cx='16' cy='26' r='6.6' fill='%238b1a1a'/%3E%3Cpath d='M12.6 24.7c2.2-2 4.8-2.6 7.8-1.6' stroke='%235a0d0d' stroke-width='1.2' stroke-linecap='round' opacity='0.65'/%3E%3Cpath d='M13 26h6' stroke='%23ffebcc' stroke-width='1.4' stroke-linecap='round'/%3E%3C/svg%3E",
        x: 16,
        y: 28,
      },
      // D — Newspaper pointer
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 32 32'%3E%3Cpath fill='%235b3a1d' d='M5 3l9 22 3-7 7-3L5 3z'/%3E%3Cpath d='M7 7l12 12' stroke='%238a5a34' stroke-width='1.3' stroke-linecap='round' opacity='0.85'/%3E%3Cpath d='M8.5 5.8l14 14' stroke='%238a5a34' stroke-width='0.9' stroke-linecap='round' opacity='0.55'/%3E%3Cpath d='M6.2 9.2l10.6 10.6' stroke='%238a5a34' stroke-width='0.7' stroke-linecap='round' opacity='0.45'/%3E%3Cpath fill='%23e8e1cf' d='M18 21h10v2H18zm0 4h8v2h-8z'/%3E%3C/svg%3E",
        x: 4,
        y: 4,
      },
      // E — Typewriter caret
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%232c2a25' d='M14 4h4v2h-1v20h1v2h-4v-2h1V6h-1V4z'/%3E%3Cpath fill='%23e8e1cf' d='M10 6h4v2h-4zm0 18h4v2h-4zm8-18h4v2h-4zm0 18h4v2h-4z'/%3E%3C/svg%3E",
        x: 16,
        y: 16,
      },
    ];

    const key = "portfolio:vintageCursorIndex";
    const DEFAULT_IDX = 3; // Option D (always start here)
    const PRESS_IDX = 1; // Option B (while pressed)
    let baseIdx = DEFAULT_IDX;
    let idx = DEFAULT_IDX;

    const applyCursor = (nextIdx, { persist } = { persist: true }) => {
      const c = cursors[nextIdx];
      const cursorValue = `url("${c.url}") ${c.x} ${c.y}, auto`;
      document.documentElement.style.setProperty("--vintage-cursor", cursorValue);
      document.documentElement.style.setProperty(
        "--vintage-cursor-clickable",
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext x='4' y='38' font-size='34'%3E%F0%9F%91%86%3C/text%3E%3C/svg%3E") 12 12, pointer`
      );
      if (persist) localStorage.setItem(key, String(nextIdx));
    };

    applyCursor(DEFAULT_IDX, { persist: true });

    const onContextMenu = (e) => {
      e.preventDefault();
      baseIdx = (baseIdx + 1) % cursors.length;
      idx = baseIdx;
      applyCursor(idx);
    };

    const onPick = (e) => {
      const next = Number(e?.detail);
      if (!Number.isFinite(next)) return;
      baseIdx = ((next % cursors.length) + cursors.length) % cursors.length;
      idx = baseIdx;
      applyCursor(idx);
    };

    const onPressStart = () => {
      applyCursor(PRESS_IDX, { persist: false });
    };

    const onPressEnd = () => {
      applyCursor(baseIdx, { persist: false });
    };

    window.addEventListener("contextmenu", onContextMenu, { capture: true });
    window.addEventListener("portfolio:cursorPick", onPick);
    window.addEventListener("pointerdown", onPressStart, { capture: true });
    window.addEventListener("pointerup", onPressEnd, { capture: true });
    window.addEventListener("pointercancel", onPressEnd, { capture: true });

    return () => {
      window.removeEventListener("contextmenu", onContextMenu, {
        capture: true,
      });
      window.removeEventListener("portfolio:cursorPick", onPick);
      window.removeEventListener("pointerdown", onPressStart, { capture: true });
      window.removeEventListener("pointerup", onPressEnd, { capture: true });
      window.removeEventListener("pointercancel", onPressEnd, { capture: true });
      void idx;
      void key;
    };
  }, []);
}

