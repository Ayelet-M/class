import React, { useEffect, useState, useRef } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const interests = [
    {
      icon: '🔬',
      title: 'Extended Reality (XR)',
      description: 'Building immersive AR/VR experiences for healthcare and education',
      link: null
    },
    {
      icon: '🏥',
      title: 'Healthcare Technology',
      description: 'Supporting EMS and medical professionals in high-stakes situations',
      link: null
    },
    {
      icon: '⚡',
      title: 'Particle Physics',
      description: 'Research experience at SLAC National Accelerator Laboratory',
      link: 'https://www.linkedin.com/posts/jonathannsegal_internship-sanfrancisco-slacnationalacceleratorlaboratory-activity-6967628873400299520-J-0m/'
    },
    {
      icon: '🏀',
      title: 'Sports Analytics',
      description: 'Applying data science to understand athletic performance',
      link: 'https://jonathansegal.io/papers/DefenseNetworks.pdf'
    },
    {
      icon: '🌍',
      title: 'Geospatial Data',
      description: 'Working with location-based data and visualization',
      link: 'https://sdmay22-35.sd.ece.iastate.edu/'
    },
    {
      icon: '🤖',
      title: 'Generative AI',
      description: 'Exploring the frontiers of AI-generated content and applications',
      link: null
    }
  ]

  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Unity', icon: '🎮' },
    { name: 'AR/VR', icon: '🥽' },
    { name: 'Machine Learning', icon: '🧠' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'C#', icon: '💜' }
  ]

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="grid-pattern"></div>

      {/* Header */}
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          <div className="logo">jonathan segal</div>
          <ul className="nav-links">
            <li><a href="#about">about</a></li>
            <li><a href="#research">research</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge">PhD Researcher at Cornell Tech</div>
            <h1>
              Hi, I'm <span className="gradient-text">Jonathan Segal</span>
            </h1>
            <p className="hero-subtitle">
              I'm exploring how augmented reality can transform healthcare delivery,
              particularly by helping EMS and medical professionals make better decisions
              in high-stakes situations.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Get in Touch ✉️
              </a>
              <a href="#research" className="btn btn-secondary">
                View My Work →
              </a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span></span>
            scroll
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <div className="about-grid animate-on-scroll">
            <div className="about-image">
              <div className="about-image-wrapper">
                <div className="about-image-inner">
                  👨‍🔬
                </div>
              </div>
            </div>
            <div className="about-content">
              <h3>About Me</h3>
              <p>
                I'm currently pursuing my Ph.D. in Information Science at{' '}
                <a href="https://bowers.cornell.edu/" target="_blank" rel="noopener noreferrer">
                  Cornell Tech
                </a>{' '}
                in New York City, where I'm a member of{' '}
                <a href="https://airlab.cis.cornell.edu/" target="_blank" rel="noopener noreferrer">
                  AIRLab
                </a>{' '}
                led by{' '}
                <a href="https://tech.cornell.edu/people/angelique-taylor/" target="_blank" rel="noopener noreferrer">
                  Dr. Angelique Taylor
                </a>.
              </p>
              <p>
                My vision is a future where augmented reality transforms healthcare delivery,
                empowering{' '}
                <a href="https://www.health.ny.gov/professionals/ems/" target="_blank" rel="noopener noreferrer">
                  EMS
                </a>{' '}
                professionals and clinicians with real-time, intelligent support during critical moments.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Publications</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Industry Internships</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Cups of Coffee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="section" id="research">
          <div className="section-header animate-on-scroll">
            <span className="section-label">What I'm Passionate About</span>
            <h2 className="section-title">Research Interests</h2>
            <p className="section-subtitle">
              From particle physics to extended reality, I love exploring the intersection
              of technology and real-world impact.
            </p>
          </div>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="interest-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => interest.link && window.open(interest.link, '_blank')}
              >
                <div className="interest-card-content">
                  <div className="interest-icon">{interest.icon}</div>
                  <h4>{interest.title}</h4>
                  <p>{interest.description}</p>
                </div>
                {interest.link && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Tools & Technologies</span>
            <h2 className="section-title">What I Work With</h2>
          </div>
          <div className="tech-stack animate-on-scroll">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <span>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section" id="experience">
          <div className="section-header animate-on-scroll">
            <span className="section-label">My Journey</span>
            <h2 className="section-title">Experience & Education</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-content left">
                <div className="timeline-year">2023 - Present</div>
                <div className="timeline-title">Ph.D. in Information Science</div>
                <div className="timeline-subtitle">
                  <a href="https://bowers.cornell.edu/" target="_blank" rel="noopener noreferrer">
                    Cornell Tech, NYC
                  </a>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div></div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div></div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2022</div>
                <div className="timeline-title">SLAC National Accelerator Lab</div>
                <div className="timeline-subtitle">
                  Research with{' '}
                  <a href="https://sites.google.com/view/jeffshrager-org/home" target="_blank" rel="noopener noreferrer">
                    Dr. Jeff Shrager
                  </a>{' '}
                  & Wan-Lin Hu
                </div>
              </div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-content left">
                <div className="timeline-year">2021 - 2022</div>
                <div className="timeline-title">BlackRock</div>
                <div className="timeline-subtitle">Financial Technology & Software Development</div>
              </div>
              <div className="timeline-dot"></div>
              <div></div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div></div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2020 - 2021</div>
                <div className="timeline-title">Dwolla</div>
                <div className="timeline-subtitle">Payment Processing & Software Engineering</div>
              </div>
            </div>

            <div className="timeline-item animate-on-scroll">
              <div className="timeline-content left">
                <div className="timeline-year">2019 - 2023</div>
                <div className="timeline-title">B.S. Software Engineering</div>
                <div className="timeline-subtitle">
                  <a href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer">
                    Iowa State University
                  </a>
                </div>
              </div>
              <div className="timeline-dot"></div>
              <div></div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="section">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Academic Work</span>
            <h2 className="section-title">Research & Publications</h2>
            <p className="section-subtitle">
              My work focuses on the intersection of augmented reality,
              human-computer interaction, and healthcare technology.
            </p>
          </div>
          <div className="publications-list animate-on-scroll">
            <a
              href="https://scholar.google.com/citations?user=Wr3zbI8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card"
            >
              <div className="publication-icon">📚</div>
              <div className="publication-content">
                <h4>Google Scholar</h4>
                <p>View my complete publication list and citation metrics</p>
                <span className="publication-link">Visit Profile →</span>
              </div>
            </a>
            <a
              href="https://orcid.org/0000-0002-8506-3785"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card"
            >
              <div className="publication-icon">🔗</div>
              <div className="publication-content">
                <h4>ORCID</h4>
                <p>Unique researcher identifier connecting all my scholarly work</p>
                <span className="publication-link">View ORCID →</span>
              </div>
            </a>
            <a
              href="https://academictree.org/infoscience/peopleinfo.php?pid=933704"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card"
            >
              <div className="publication-icon">🌳</div>
              <div className="publication-content">
                <h4>Academic Tree</h4>
                <p>Explore my academic lineage and research connections</p>
                <span className="publication-link">View Tree →</span>
              </div>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="contact-section animate-on-scroll">
            <div className="contact-content">
              <h2 className="contact-title">Let's Connect</h2>
              <p className="contact-subtitle">
                I'm always excited to discuss research opportunities,
                collaborate on interesting projects, or just chat about XR and healthcare tech.
              </p>
              <a href="mailto:jis62@cornell.edu" className="btn btn-primary">
                Email Me ✉️
              </a>
              <div className="social-links">
                <a
                  href="https://github.com/Jonathannsegal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathannsegal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://twitter.com/jonathannsegal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                >
                  🐦 Twitter
                </a>
                <a
                  href="https://www.instagram.com/jonathannsegal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">jonathan segal</div>
          <p className="footer-text">
            © 2026 Jonathan Segal. Built with React & ☕
          </p>
          <div className="footer-links">
            <a href="mailto:jis62@cornell.edu">jis62@cornell.edu</a>
            <a href="https://bowers.cornell.edu/" target="_blank" rel="noopener noreferrer">
              Cornell Tech
            </a>
            <a href="https://airlab.cis.cornell.edu/" target="_blank" rel="noopener noreferrer">
              AIRLab
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
