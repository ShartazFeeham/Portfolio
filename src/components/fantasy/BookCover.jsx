export default function BookCover({ volumeLine, companyLine, coverSubtitle }) {
  return (
    <div className="fantasy-book-cover-wrap">
      <span className="fantasy-book-page-shade fantasy-book-page-shade--rb fantasy-book-page-shade--cover" aria-hidden="true" />
      <div className="fantasy-book-cover">
        <span className="fantasy-book-spine" aria-hidden="true" />
        <span className="fantasy-book-ornament fantasy-book-ornament--tl" aria-hidden="true" />
        <span className="fantasy-book-ornament fantasy-book-ornament--tr" aria-hidden="true" />
        <span className="fantasy-book-ornament fantasy-book-ornament--bl" aria-hidden="true" />
        <span className="fantasy-book-ornament fantasy-book-ornament--br" aria-hidden="true" />
        <div className="fantasy-book-cover-inner">
          <span className="fantasy-book-sigil" aria-hidden="true">✦</span>
          <span className="fantasy-book-cover-title">
            <span className="block">{volumeLine}</span>
            <span className="fantasy-book-cover-company">{companyLine}</span>
          </span>
          {coverSubtitle ? <span className="fantasy-book-cover-sub">{coverSubtitle}</span> : null}
        </div>
      </div>
    </div>
  );
}
