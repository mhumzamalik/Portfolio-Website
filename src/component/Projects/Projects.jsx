import React from 'react'
import './projects.css'

const projectItems = [
  {
    title: 'StreamLine',
    category: 'SaaS Dashboard',
    description: 'A performance analytics dashboard built with React and animated charts.',
    highlight: 'React • Charts • UX',
    accent: 'purple',
    url: 'https://example.com/streamline',
    image: '/project-streamline.svg',
  },
  {
    title: 'TravelMate',
    category: 'Booking Platform',
    description: 'A responsive travel booking UI with search, filters, and itinerary cards.',
    highlight: 'Responsive Design • API • Tailwind',
    accent: 'blue',
    url: 'https://example.com/travelmate',
    image: '/project-travelmate.svg',
  },
  {
    title: 'CryptoPulse',
    category: 'Finance App',
    description: 'A crypto portfolio manager with live price feed and transaction history.',
    highlight: 'Web3 • Data Viz • Dashboard',
    accent: 'pink',
    url: 'https://example.com/cryptopulse',
    image: '/project-cryptopulse.svg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Projects<span className="dot">.</span></h2>
        <p>These are a few of my recent builds — all created with modern front-end tools.</p>
      </div>

      <div className="projects-grid">
        {projectItems.map((project) => (
          <a
            key={project.title}
            className={`project-card project-${project.accent}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-preview">
              <img src={project.image} alt={`${project.title} preview`} />
            </div>
            <div className="project-body">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tag">{project.highlight}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
