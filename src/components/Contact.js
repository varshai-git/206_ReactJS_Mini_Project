import React, { useState } from 'react';
import './Main.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: 'Indira Gandhi 2nd Street, Choolaimedu - Chennai, TN 600094, India'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 9444805027'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'support@eazycart.com'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM | Sat-Sun: 10:00 AM - 4:00 PM'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="info-card">
              <div className="info-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p>{info.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your message in detail..."
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Map Section */}
          <div className="contact-map-wrapper">
            <h2>Visit Us</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.822237547743!2d80.2447!3d13.0044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sBasha%20Street%2C%20Choolaimedu%2C%20Chennai!5e0!3m2!1sen!2sin!4v1688884902"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EazyCart Location"
              ></iframe>
            </div>
            <div className="map-info">
              <p><strong>EazyCart Head Office</strong></p>
              <p>Basha Street</p>
              <p>Choolaimedu, Chennai</p>
              <p>Tamil Nadu, 600094, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>❓ What is your return policy?</h3>
            <p>We offer a 30-day return policy on most products. If you're not satisfied with your purchase, simply contact us to initiate a return.</p>
          </div>
          <div className="faq-item">
            <h3>📦 How long does delivery take?</h3>
            <p>Standard delivery takes 3-5 business days. Express delivery options are available for most items and arrive within 24 hours.</p>
          </div>
          <div className="faq-item">
            <h3>💳 What payment methods do you accept?</h3>
            <p>We accept all major credit cards, debit cards, UPI, net banking, and digital wallets for your convenience.</p>
          </div>
          <div className="faq-item">
            <h3>🔒 Is my personal information secure?</h3>
            <p>Yes, we use bank-level encryption to protect all your personal and financial information. Your security is our priority.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <h2>Have Questions?</h2>
        <p>Our customer support team is here to help you 24/7</p>
        <a href="tel:+919444805027" className="cta-link">Call us now: +91 9444805027</a>
      </section>
    </main>
  );
};

export default Contact;