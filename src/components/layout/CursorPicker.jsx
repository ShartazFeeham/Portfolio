const CURSORS = [
  { id: 0, label: "A", icon: "nib" },
  { id: 1, label: "B", icon: "quill" },
  { id: 2, label: "C", icon: "seal" },
  { id: 3, label: "D", icon: "paper" },
  { id: 4, label: "E", icon: "caret" },
];

function CursorIcon({ type }) {
  if (type === "nib") {
    return (
      <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M16 2l7 7-8 16-6 2 2-6 16-8-7-7z" />
        <circle cx="16" cy="16" r="2.2" className="fill-[#e8e1cf]" />
      </svg>
    );
  }
  if (type === "quill") {
    return (
      <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M26 6c-7 1-12 6-14 14l-4 6 6-4c8-2 13-7 14-14-1-1-2-2-2-2z" />
      </svg>
    );
  }
  if (type === "seal") {
    return (
      <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 2h8v8l-2 2v6h-4v-6l-2-2V2z" />
        <circle cx="16" cy="26" r="6.5" className="fill-[#8b1a1a]" />
      </svg>
    );
  }
  if (type === "paper") {
    return (
      <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M5 3l9 22 3-7 7-3L5 3z" />
        <path d="M18 21h10v2H18zm0 4h8v2h-8z" className="fill-[#e8e1cf]" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M14 4h4v2h-1v20h1v2h-4v-2h1V6h-1V4z" />
    </svg>
  );
}

export function CursorPicker() {
  return (
    <section className="mt-2 pt-2 border-t border-[#2c2a25]/40">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-headline text-[10px] font-black uppercase tracking-widest opacity-70">
          Cursor selector
          <span className="font-times normal-case font-normal opacity-70">
            {" "}
            (right-click also cycles)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {CURSORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("portfolio:cursorPick", { detail: c.id }))
              }
              className="group flex items-center gap-1.5 px-2 py-1 border border-[#2c2a25]/40 bg-[#f2f0e6] hover:bg-[#e8e1cf] shadow-sm"
            >
              <span className="font-headline text-[10px] font-black uppercase">{c.label}</span>
              <span className="w-4 h-4 text-[#2c2a25] group-hover:text-[#8b1a1a]">
                <CursorIcon type={c.icon} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

