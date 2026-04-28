import React from 'react';
import './Main.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We are committed to offering only the highest quality products from trusted brands.'
    },
    {
      icon: '💝',
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We provide 24/7 support and hassle-free returns.'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Same-day and next-day delivery options available for most products across major cities.'
    },
    {
      icon: '🏆',
      title: 'Best Prices',
      description: 'We guarantee the most competitive prices with regular discounts and exclusive offers.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '10K+', label: 'Products' },
    { number: '500+', label: 'Brands' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About EazyCart</h1>
          <p>Your Trusted Online Shopping Destination</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-section">
        <div className="section-container">
          <div className="section-text">
            <h2>Who We Are</h2>
            <p>
              EazyCart is a leading e-commerce platform dedicated to bringing quality products and exceptional service right to your doorstep. Since our inception, we've been committed to revolutionizing the online shopping experience by offering a wide range of products from electronics to fashion, all in one convenient platform.
            </p>
            <p>
              With a focus on innovation and customer satisfaction, we continue to expand our product range and improve our services to meet the evolving needs of our customers. Our mission is to make shopping accessible, affordable, and enjoyable for everyone.
            </p>
          </div>
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About EazyCart" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section story-section">
        <div className="section-container">
          <div className="section-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Story" />
          </div>
          <div className="section-text">
            <h2>Our Story</h2>
            <p>
              EazyCart was founded with a simple vision: to create an online marketplace that combines convenience, quality, and affordability. What started as a small venture has grown into a thriving platform serving thousands of satisfied customers.
            </p>
            <p>
              Over the years, we've built strong partnerships with leading brands and suppliers to ensure our customers always get the best products at the best prices. Our dedicated team works tirelessly to enhance user experience and expand our offerings.
            </p>
            <p>
              Today, EazyCart stands as a testament to customer trust and our unwavering commitment to excellence. We continue to innovate and improve, ensuring that shopping with us is always a delightful experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <h2>Why Choose EazyCart?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-number">01</span>
            <h3>Wide Selection</h3>
            <p>Over 10,000 products across multiple categories from trusted brands.</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">02</span>
            <h3>Secure Payment</h3>
            <p>Multiple payment options with bank-level security for your peace of mind.</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">03</span>
            <h3>Easy Returns</h3>
            <p>30-day return policy with no questions asked. Your satisfaction guaranteed.</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">04</span>
            <h3>Expert Support</h3>
            <p>Friendly customer service team available 24/7 to assist you anytime.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Shopping?</h2>
        <p>Explore thousands of amazing products and enjoy an unbeatable shopping experience.</p>
        <button className="cta-button">Shop Now</button>
      </section>
    </main>
  );
};

export default About;