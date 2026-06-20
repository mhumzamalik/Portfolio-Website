import React, { useState } from 'react'
import './about.css'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const renderTabContent = () => {
    if (activeTab === 'education') {
      return (
        <p className="about-detail">
          Bachelor in Software Engineering from University of Central Punjab, Lahore, Pakistan.
        </p>
      )
    }

    if (activeTab === 'certifications') {
      return (
        <ul className="certifications-list">
          <li>Advance Web Engineering from National Vocational and Technical Training Commission</li>
          <li>MERN stack from Punjab Skills Development Fund</li>
        </ul>
      )
    }

    return (
      <ul className="skills-list">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>Tailwindcss</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
    )
  }

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-image">
          <img src="/aboutPic.png" alt="About illustration" />
        </div>

        <div className="about-copy">
          <h2 className="about-title">About Me<span className="dot">.</span></h2>
          <p className="about-text">
            I specialize in developing responsive web applications using HTML, CSS, JavaScript, Typescript, React.js, and Next.js. Over the years, I've delivered high-quality solutions that provide exceptional user experiences and optimal performance across all devices. My experience collaborating with cross-functional teams and developing various projects has equipped me with the skills and confidence to tackle and resolve any challenges in my field effectively.
          </p>

          <div className="about-tabs">
            <button
              type="button"
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              type="button"
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
            <button
              type="button"
              className={`tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              Certifications
            </button>
          </div>

          {renderTabContent()}
        </div>
      </div>
    </section>
  )
}
