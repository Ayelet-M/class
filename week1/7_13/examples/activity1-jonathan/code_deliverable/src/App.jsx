import React from 'react'

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="logo">jonathan segal</div>
          <ul className="nav-links">
            <li><a href="#about">about</a></li>
            <li><a href="#work">work/cv</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="about">
          <h1>hi, I'm jonathan segal</h1>
          <p>
            I'm currently working on my Ph.D. in Information Science at <a href="https://bowers.cornell.edu/" target="_blank" rel="noopener noreferrer">Cornell Tech</a> and am a member of <a href="https://airlab.cis.cornell.edu/" target="_blank" rel="noopener noreferrer">AIRLab</a> led by <a href="https://tech.cornell.edu/people/angelique-taylor/" target="_blank" rel="noopener noreferrer">Dr. Angelique Taylor</a>.
          </p>
          <p>
            I am motivated by a future where augmented reality transforms healthcare delivery, particularly by assisting <a href="https://www.health.ny.gov/professionals/ems/" target="_blank" rel="noopener noreferrer">EMS</a> and other medical professionals in high-stakes situations.
          </p>
        </section>

        {/* Interests Section */}
        <section className="container">
          <h2>Research Interests</h2>
          <p style={{ marginBottom: '1.5rem' }}>I'm excited about many topics, including:</p>
          <div className="interests">
            <div className="interest-tag">
              <a href="https://www.linkedin.com/posts/jonathannsegal_internship-sanfrancisco-slacnationalacceleratorlaboratory-activity-6967628873400299520-J-0m/" target="_blank" rel="noopener noreferrer">Particle Physics</a>
            </div>
            <div className="interest-tag">
              <a href="https://jonathansegal.io/papers/DefenseNetworks.pdf" target="_blank" rel="noopener noreferrer">Sports Analytics</a>
            </div>
            <div className="interest-tag">
              <a href="https://sdmay22-35.sd.ece.iastate.edu/" target="_blank" rel="noopener noreferrer">Geospatial Data</a>
            </div>
            <div className="interest-tag">
              Generative AI
            </div>
            <div className="interest-tag">
              <a href="https://medium.com/@jonathannsegal/my-startup-in-college-failed-heres-what-i-learned-96fae77921a1" target="_blank" rel="noopener noreferrer">Startups</a>
            </div>
            <div className="interest-tag">
              Extended Reality (XR)
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="container bio-section">
          <h2>Education & Experience</h2>
          
          <h3>Current</h3>
          <p>
            <strong>Ph.D. in Information Science</strong><br />
            <a href="https://bowers.cornell.edu/" target="_blank" rel="noopener noreferrer">Cornell Tech</a>, New York City
          </p>

          <h3>Previous Education</h3>
          <p>
            <strong>Bachelor's Degree in Software Engineering</strong><br />
            <a href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer">Iowa State University</a><br />
            Worked with <a href="https://www.engineering.iastate.edu/people/profile/gilbert/" target="_blank" rel="noopener noreferrer">Dr. Stephen Gilbert</a> and <a href="https://www.imse.iastate.edu/dorneich/" target="_blank" rel="noopener noreferrer">Dr. Michael Dorneich</a> at <a href="https://www.vrac.iastate.edu/" target="_blank" rel="noopener noreferrer">VRAC</a>
          </p>

          <h3>Internships & Industry</h3>
          <ul className="experience-list">
            <li>
              <strong>SLAC National Accelerator Laboratory</strong><br />
              Worked with <a href="https://sites.google.com/view/jeffshrager-org/home" target="_blank" rel="noopener noreferrer">Dr. Jeff Shrager</a> and <a href="https://profiles.stanford.edu/wan-lin-hu" target="_blank" rel="noopener noreferrer">Wan-Lin Hu</a>
            </li>
            <li>
              <strong>BlackRock</strong><br />
              Financial technology and software development
            </li>
            <li>
              <strong>Dwolla</strong><br />
              Payment processing and software engineering
            </li>
          </ul>
        </section>

        {/* Publications & Work Section */}
        <section className="container bio-section" id="work">
          <h2>Research & Publications</h2>
          <p>
            My research focuses on the intersection of augmented reality, human-computer interaction, and healthcare technology. I'm particularly interested in how emerging technologies can support emergency medical services and other high-stakes professional environments.
          </p>
          
          <div className="social-links" style={{ marginTop: '2rem' }}>
            <a href="https://scholar.google.com/citations?user=Wr3zbI8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://orcid.org/0000-0002-8506-3785" target="_blank" rel="noopener noreferrer">ORCID</a>
            <a href="https://academictree.org/infoscience/peopleinfo.php?pid=933704" target="_blank" rel="noopener noreferrer">Academic Tree</a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container bio-section" id="contact">
          <h2>Get In Touch</h2>
          <p>
            I'm always interested in collaborating on interesting projects or discussing research opportunities.
          </p>
          <div className="social-links">
            <a href="mailto:jis62@cornell.edu">Email Me</a>
            <a href="https://github.com/Jonathannsegal" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/jonathannsegal" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/jonathannsegal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/jonathannsegal/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Jonathan Segal. All rights reserved.</p>
        <p>Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
