import React, { useState } from 'react'
import './contact.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all required fields before sending your message.')
      return
    }

    if (!agree) {
      alert('Please agree to the privacy policy before sending your message.')
      return
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:46humza@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-title-block">
        <h1>Contact Me<span className="contact-title-dot">.</span></h1>
        <p>Feel free to contact me if you have any questions or works.</p>
      </div>
      <div className="contact-inner">
        <div className="contact-left">
          <div className="contact-header">
            <p className="contact-subtitle">Meet with Muhammad Hamza</p>
            <h2>Looking forward to aligning on our project goals and next steps</h2>
          </div>

          <div className="contact-profile">
            <div className="profile-avatar" aria-hidden="true" />
            <div>
              <p className="profile-name">Muhammad Hamza</p>
              <p className="profile-role">Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>FULL NAME *</span>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>EMAIL *</span>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>MESSAGE *</span>
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <label className="contact-checkbox">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span>I agree that my personal data will be processed in accordance with the privacy policy</span>
            </label>

            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
