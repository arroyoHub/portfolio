import "./App.css";

const navItems = ["About", "Skills", "Projects", "Resume", "Contact"];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#top" className="brand">
            Portfolio
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="section hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1 id="hero-title">Hero placeholder</h1>
            <p className="lede">
              This area can hold a short introduction, a headline, or a call to
              action.
            </p>
          </div>

          <div className="hero-panel" aria-label="Hero placeholder panel">
            <span>Hero placeholder</span>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>About</h2>
          </div>
          <p>Add a brief introduction here.</p>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Skills</h2>
          </div>

          <ul className="placeholder-list">
            <li>Skill placeholder</li>
            <li>Skill placeholder</li>
            <li>Skill placeholder</li>
          </ul>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Projects</h2>
          </div>

          <div className="card-grid">
            <article className="info-card">
              <h3>Project placeholder</h3>
              <p>Add project details here.</p>
            </article>
            <article className="info-card">
              <h3>Project placeholder</h3>
              <p>Add project details here.</p>
            </article>
            <article className="info-card">
              <h3>Project placeholder</h3>
              <p>Add project details here.</p>
            </article>
          </div>
        </section>

        <section id="resume" className="section">
          <div className="section-heading">
            <p className="eyebrow">Resume</p>
            <h2>Resume</h2>
          </div>
          <p>Resume content placeholder.</p>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Contact</h2>
          </div>
          <p>Contact details placeholder.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
