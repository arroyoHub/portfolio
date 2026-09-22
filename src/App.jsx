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
          <div className="skills-layout">
            <div className="section-heading">
              <p className="eyebrow">what i work with</p>
              <h2>skills &amp; tools.</h2>
            </div>

            <div
              className="skill-groups"
              aria-label="Skills and tools categories"
            >
              <div className="skill-group">
                <h3>Data &amp; databases</h3>
                <ul>
                  <li>SQL Server</li>
                  <li>T-SQL</li>
                  <li>SSMS</li>
                  <li>Relational Data Modeling</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3>Analysis &amp; reporting</h3>
                <ul>
                  <li>Excel</li>
                  <li>Power BI</li>
                  <li>Python</li>
                  <li>pandas</li>
                  <li>Jupyter</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3>Workflow &amp; development</h3>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>Technical Documentation</li>
                </ul>
              </div>

              <div className="skill-group">
                <h3>Analytical work</h3>
                <ul>
                  <li>Reporting</li>
                  <li>Requirements Analysis</li>
                  <li>Process Improvement</li>
                  <li>Data Quality</li>
                  <li>Operational Analysis</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <div className="resume-header">
            <p className="eyebrow">resume</p>
            <h2>experience, on paper.</h2>
          </div>

          <p className="resume-copy">
            My experience spans data analysis, reporting, database work,
            requirements analysis, process improvement, and operational support.
          </p>

          <div className="resume-actions">
            <a href="/resume.pdf" className="resume-primary" download>
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com"
              className="resume-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>
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
