
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Our Services</h2>
          <p className="section-subtitle">எங்கள் சேவைகள்</p>
        </div>
        <div className="services-grid">
          <div className="service-card floating">
            <div className="service-icon">
              <img src="/assets/generated_images/wedding_catering_setup.png" alt="Wedding Catering" />
            </div>
            <h3>Wedding Catering</h3>
            <p className="tamil">திருமண கேட்டரிங்</p>
            <p>Grand feasts for your special day with authentic traditional menu</p>
          </div>
          <div className="service-card floating" style={{ animationDelay: '0.2s' }}>
            <div className="service-icon">
              <img src="/assets/generated_images/corporate_catering_buffet.png" alt="Corporate Events" />
            </div>
            <h3>Corporate Events</h3>
            <p className="tamil">கார்ப்பரேட் நிகழ்வுகள்</p>
            <p>Professional catering for business meetings and conferences</p>
          </div>
          <div className="service-card floating" style={{ animationDelay: '0.4s' }}>
            <div className="service-icon">
              <img src="/assets/generated_images/outdoor_catering_event.png" alt="Private Parties" />
            </div>
            <h3>Private Parties</h3>
            <p className="tamil">தனிப்பட்ட விருந்துகள்</p>
            <p>Customized menus for birthday parties and family gatherings</p>
          </div>
          <div className="service-card floating" style={{ animationDelay: '0.6s' }}>
            <div className="service-icon">
              <img src="/assets/generated_images/traditional_food_serving.png" alt="Contract Catering" />
            </div>
            <h3>Contract & Labour</h3>
            <p className="tamil">ஒப்பந்தம் & தொழிலாளர்</p>
            <p>Regular catering services for offices and institutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
