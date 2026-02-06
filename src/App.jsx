// src/App.jsx
import "./App.css";

// ✅ Branding assets (add these files to src/assets/)
import logo from "./assets/wings-logo.png";

// ✅ Hero image
import heroImg from "./assets/hockey-hero.jpg";

// ✅ Card images (add these files to src/assets/cards/)
import imgInhouse from "./assets/cards/inhouse.jpg";
import imgLearnTo from "./assets/cards/learnto.png";
import imgLunchtime from "./assets/cards/lunchtime.png";
import imgAdultLeague from "./assets/cards/adultleague.png";
import imgPrivateLessons from "./assets/cards/privatelessons.jpg";
import imgStickPuck from "./assets/cards/stickpuck.jpg";
import imgMites from "./assets/cards/mites.jpg";

const CARDS = [
  {
    title: "In-House Spring League",
    description: "Season details, divisions, rules, and registration.",
    image: imgInhouse,
    alt: "In-House Spring League",
    pos: "50% 35%",
    href: "https://www.wingsarena.com/inhouse-spring-league",
  },
  {
    title: "Learn to Play",
    description: "Beginner-friendly programs for new skaters & players.",
    image: imgLearnTo,
    alt: "Learn to Play & Skate",
    pos: "70% 40%",
    href: "https://www.wingsarena.com/learnto",
  },
  {
    title: "Lunchtime Adult Drop-In Hockey",
    description: "Midday skate—fast, fun, and easy to join.",
    image: imgLunchtime,
    alt: "Lunchtime Adult Drop-In Hockey",
    pos: "50% 0%",
    href: "https://www.wingsarena.com/lunchtime-hockey",
  },
  {
    title: "Wings Arena Adult Hockey League",
    description: "Multiple skill levels. Competitive, organized league play.",
    image: imgAdultLeague,
    alt: "Adult Hockey League",
    fit: "cover",
    scale: 1,
    href: "https://www.wingsarena.com/adulthockey",
  },
  {
    title: "Private Lessons",
    description: "One-on-one coaching for skating and hockey development.",
    image: imgPrivateLessons,
    alt: "Private Lessons",
    pos: "50% 30%",
    href: "https://www.wingsarena.com/private-lessons",
  },
  {
    title: "Stick & Puck",
    description: "Sharpen your skills—shooting, puckhandling, and reps.",
    image: imgStickPuck,
    alt: "Stick & Puck",
    pos: "50% 45%",
    href: "https://www.wingsarena.com/stickandpuck",
  },
  {
    title: "Mites B/C Schedule",
    description: "Quick access to the latest schedule and updates.",
    image: imgMites,
    alt: "Mites B/C Schedule",
    pos: "50% 35%",
    href: "https://www.wingsarena.com/mites-bcschedule",
  },
];

function getCardCtaText(title) {
  if (title === "In-House Spring League") return "Info & Registration";
  if (title === "Learn to Play") return "Info & Registration";
  if (title === "Lunchtime Adult Drop-In Hockey") return "Info & RSVP";
  if (title === "Private Lessons") return "Learn More";
  if (title === "Stick & Puck") return "Learn More";
  if (title === "Mites B/C Schedule") return "Schedule";
  if (title === "Wings Arena Adult Hockey League") return "Learn More";
  return "Learn More";
}

function hasRaisedDivider(title) {
  return (
    title === "In-House Spring League" ||
    title === "Learn to Play" ||
    title === "Lunchtime Adult Drop-In Hockey"
  );
}

function HockeyCard({ title, description, image, alt, pos, fit, scale, href }) {
  const isContain = fit === "contain";
  const imgScale = isContain ? 1 : typeof scale === "number" ? scale : 1;

  const raisedDivider = hasRaisedDivider(title);
  const ctaText = getCardCtaText(title);

  return (
    <div
      className={`card ${raisedDivider ? "card--raiseDivider" : ""}`}
      role="group"
      aria-label={title}
    >
      <div className={`cardMedia ${isContain ? "cardMedia--contain" : ""}`}>
        <img
          className={`cardImg ${isContain ? "cardImg--contain" : ""}`}
          src={image}
          alt={alt}
          loading="lazy"
          style={{
            objectPosition: pos || "50% 50%",
            transform: `scale(${imgScale})`,
          }}
        />
      </div>

      <div className="cardTop">
        <div className="cardText">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDesc">{description}</p>
        </div>
      </div>

      <div className="cardBtnSlot" aria-label={ctaText}>
        <div className="cardDivider" aria-hidden="true" />

        {/* ✅ Option A: real link that navigates the TOP window (avoids loading inside the iframe) */}
        <a
          className="cardCtaBtn"
          href={href}
          target="_top"
          rel="noreferrer"
          aria-label={ctaText}
        >
          <span className="cardCtaBtnText">{ctaText}</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero" style={{ "--hero-image": `url(${heroImg})` }}>
        <div className="heroOverlay" />

        <div className="heroInner">
          <div className="brandStack" aria-label="Wings Arena Hockey Programs">
            <img className="logo" src={logo} alt="Wings Arena" />
          </div>

          <h1 className="srOnly">Wings Arena Hockey Programs</h1>

          <p className="heroSubtitle">
            Find leagues, development, drop-ins, lessons, and sessions — all in one place.
          </p>
        </div>
      </header>

      <main className="content">
        <section className="grid" aria-label="Hockey links">
          {CARDS.map((c) => (
            <HockeyCard key={c.title} {...c} />
          ))}
        </section>

        <div className="ctaRow" aria-label="Ice rentals">
          <a
            className="heroBtn heroBtn--primary"
            href="https://www.catchcorner.com/facility-page/embedded/rental/wings-arena"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ice Rentals
          </a>
        </div>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Wings Arena</span>
      </footer>
    </div>
  );
}
