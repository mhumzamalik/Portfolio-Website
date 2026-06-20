import React from 'react'
import './skills.css'

const skillsData = [
  { name: 'HTML5', value: 97, color: '#f87171' },
  { name: 'CSS3', value: 98, color: '#a78bfa' },
  { name: 'JavaScript', value: 95, color: '#4f46e5' },
  { name: 'React', value: 95, color: '#3b82f6' },
  { name: 'Express.js', value: 96, color: '#54f63b' },
  { name: 'Tailwind CSS', value: 94, color: '#c084fc' },
  { name: 'TypeScript', value: 92, color: '#1d4ed8' },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner">
        <div className="skills-image">
          <img src="/skillsPic.jpg" alt="Skills illustration" />
        </div>

        <div className="skills-copy">
          <h2 className="skills-title">Skills<span className="dot">.</span></h2>

          <div className="skills-list">
            {skillsData.map(skill => (
              <div key={skill.name} className="skill-row">
                <div className="skill-label">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="skill-progress">
                  <div className="skill-arrow" aria-hidden="true">←</div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${skill.value}%`, backgroundColor: skill.color }} />
                  </div>
                  <div className="skill-arrow" aria-hidden="true">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
