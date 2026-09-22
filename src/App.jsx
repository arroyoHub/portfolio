import "./App.css";

const navItems = ["About", "Skills", "Projects", "Resume", "Contact"];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#top" className="brand">
            Christian Arroyo
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
            <p className="eyebrow">hi, i’m</p>
            <h1 id="hero-title">Christian Arroyo</h1>
            <p className="positioning">
              Data Analyst | Reporting | Business Intelligence
            </p>
            <p className="lede">
              Turning operational data and business requirements into reliable
              reporting and reusable solutions.
            </p>

            <a href="#projects" className="cta-link">
              See my work
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">selected work</p>
            <h2>things i’ve analyzed &amp; built</h2>
          </div>

          <div className="project-list" aria-label="Selected work list">
            <article className="project-row">
              <div className="project-number">01</div>
              <div className="project-content">
                <h3>Economic Opportunity Dashboard</h3>
                <p>
                  Exploring the relationships between income, homeownership,
                  inflation, employment demand, and generational economic
                  outcomes.
                </p>
                <div className="tag-list" aria-label="Project tags">
                  <span>Power BI</span>
                  <span>Data Analysis</span>
                  <span>Data Storytelling</span>
                </div>
              </div>
              <div className="project-arrow" aria-hidden="true">
                →
              </div>
            </article>

            <article className="project-row">
              <div className="project-number">02</div>
              <div className="project-content">
                <h3>Configurable Data Processing Platform</h3>
                <p>
                  A reusable SQL Server architecture designed around
                  configurable processing, maintainability, auditability, and
                  operational visibility.
                </p>
                <div className="tag-list" aria-label="Project tags">
                  <span>SQL Server</span>
                  <span>Data Modeling</span>
                  <span>T-SQL</span>
                  <span>Git</span>
                </div>
              </div>
              <div className="project-arrow" aria-hidden="true">
                →
              </div>
            </article>

            <article className="project-row">
              <div className="project-number">03</div>
              <div className="project-content">
                <h3>Skip Trace Analytics</h3>
                <p>
                  A relational tracking and reporting framework designed to
                  analyze vendor results, duplicate activity, hit rates, and
                  operational costs.
                </p>
                <div className="tag-list" aria-label="Project tags">
                  <span>SQL Server</span>
                  <span>Reporting</span>
                  <span>Analytics</span>
                </div>
              </div>
              <div className="project-arrow" aria-hidden="true">
                →
              </div>
            </article>

            <article className="project-row">
              <div className="project-number">04</div>
              <div className="project-content">
                <h3>March Madness Predictor</h3>
                <p>
                  Exploring historical NCAA tournament data and predictive
                  modeling techniques using Python.
                </p>
                <div className="tag-list" aria-label="Project tags">
                  <span>Python</span>
                  <span>pandas</span>
                  <span>Data Analysis</span>
                </div>
              </div>
              <div className="project-arrow" aria-hidden="true">
                →
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section">
          <div className="about-layout">
            <div
              className="about-photo"
              aria-label="Profile photo placeholder"
            ></div>

            <div className="about-copy">
              <div className="section-heading">
                <p className="eyebrow">about me</p>
                <h2>hi, i’m christian.</h2>
              </div>

              <p>
                I’m a data analyst based in San Antonio, working with SQL
                Server, reporting, operational data, and business processes.
              </p>
              <p>
                I enjoy turning messy requirements and repetitive workflows into
                structured data, clearer reporting, and reusable solutions.
              </p>
              <p>
                I’m continuing to deepen my skills in SQL, Power BI, Python, and
                data modeling while building stronger end-to-end analytics
                workflows.
              </p>

              <div className="about-links">
                <a href="#projects">see my work</a>
                <a href="#contact">get in touch</a>
              </div>
            </div>
          </div>
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
