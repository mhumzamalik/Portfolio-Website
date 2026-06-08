import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="intro">Hi, I am <span className="name">Muhammad Hamza</span></p>
          <h2 className="title">A Full-Stack<br/>Web Developer</h2>

          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#contact">Hire Me</a>
            <a className="hero-btn hero-btn-secondary" href="https://github.com/mhumzamalik" target="_blank" rel="noreferrer">Github</a>
            <a className="hero-btn hero-btn-secondary" href="/MuhammadHamzaWeb.pdf" download>Resume</a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-bg">
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
