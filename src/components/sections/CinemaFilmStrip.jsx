export default function CinemaFilmStrip({ position }) {
  return (
    <div className={`cinema-film-strip cinema-film-strip--${position}`}>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="cinema-sprocket" />
      ))}
    </div>
  );
}
