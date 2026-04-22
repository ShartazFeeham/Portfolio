export function VintageLetter({ children, className = "" }) {
  return (
    <div className={`vintage-letter ${className}`} aria-label="Handwritten letter note">
      <div className="vintage-letter__paper">
        <div className="vintage-letter__content">{children}</div>
      </div>
    </div>
  );
}

