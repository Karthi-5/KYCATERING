
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">About Us</h2>
          <p className="section-subtitle">எங்களைப் பற்றி</p>
        </div>
        <div className="about-content">
          <div className="about-card floating-slow">
            <div className="about-icon">
              <img src="/assets/generated_images/chef_character_illustration.png" alt="Chef" />
            </div>
            <div className="about-text">
              <h3>V. Kumar</h3>
              <p className="english">Providing premium catering services for over two decades. We specialize in authentic South Indian cuisine with a blend of traditional recipes and modern presentation.</p>
              <p className="tamil">இருபது ஆண்டுகளுக்கும் மேலாக உயர்தர கேட்டரிங் சேவைகளை வழங்குகிறோம். பாரம்பரிய சமையல் குறிப்புகள் மற்றும் நவீன வழங்கலுடன் உண்மையான தென்னிந்திய உணவு வகைகளில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
