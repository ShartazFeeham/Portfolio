import './ContactSection.css';

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <h2 className="font-headline font-black text-xl md:text-2xl uppercase leading-none text-[#2c2a25]">
        <a href="#index">CONTACT</a>
      </h2>

      <div className="mailbox-scene">
        {/* ── Mailbox ── */}
        <div className="mailbox">
          {/* Lid / roof */}
          <div className="mailbox-lid">
            <div className="mailbox-slot" />
            <div className="mailbox-slot-flap" />
            {/* Letters peeking out */}
            <div className="mailbox-letters-peek">
              <div className="mailbox-letter-peek" />
              <div className="mailbox-letter-peek" />
              <div className="mailbox-letter-peek" />
            </div>
          </div>

          {/* Box body */}
          <div className="mailbox-box">
            {/* Gold plaque */}
            <div className="mailbox-plaque">Feeham</div>

            {/* Decorative body lines */}
            <div className="mailbox-body-info">
              <div className="mailbox-body-line" />
              <div className="mailbox-body-text">Dhaka &middot; Bangladesh</div>
              <div className="mailbox-body-line" />
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

        {/* ── Contact letter cards ── */}
        <div className="mailbox-contact-cards">
          <div className="mailbox-letter-card">
            <div className="mailbox-card-label">E-mail</div>
            <div className="mailbox-card-value">
              <a href="mailto:mdfeeham@gmail.com">mdfeeham@gmail.com</a>
            </div>
            <div className="mailbox-seal"><span className="mailbox-seal-text">F</span></div>
          </div>

          <div className="mailbox-letter-card">
            <div className="mailbox-card-label">Phone</div>
            <div className="mailbox-card-value">
              <a href="tel:+8801819853595">+880 1819 853595</a>
            </div>
          </div>

          <div className="mailbox-letter-card">
            <div className="mailbox-card-label">GitHub</div>
            <div className="mailbox-card-value">
              <a href="https://github.com/ShartazFeeham" target="_blank" rel="noopener noreferrer">
                github.com/ShartazFeeham
              </a>
            </div>
          </div>

          <div className="mailbox-letter-card">
            <div className="mailbox-card-label">LinkedIn</div>
            <div className="mailbox-card-value">
              <a href="https://www.linkedin.com/in/shartaz-feeham" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/shartaz-feeham
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
