
import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Gallery</h2>
          <p className="section-subtitle">படத்தொகுப்பு</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item floating">
            <img src="/assets/generated_images/hero_banana_leaf_meal.png" alt="Banana Leaf Meal" />
            <div className="gallery-overlay">
              <span>Traditional Banana Leaf Meal</span>
              <span className="tamil">வாழை இலை சாப்பாடு</span>
            </div>
          </div>
          <div className="gallery-item floating" style={{ animationDelay: '0.1s' }}>
            <img src="/assets/generated_images/traditional_food_serving.png" alt="Traditional Food" />
            <div className="gallery-overlay">
              <span>Traditional Food Serving</span>
              <span className="tamil">பாரம்பரிய உணவு</span>
            </div>
          </div>
          <div className="gallery-item floating" style={{ animationDelay: '0.2s' }}>
            <img src="/assets/generated_images/wedding_catering_setup.png" alt="Wedding Setup" />
            <div className="gallery-overlay">
              <span>Wedding Catering Setup</span>
              <span className="tamil">திருமண அமைப்பு</span>
            </div>
          </div>
          <div className="gallery-item floating" style={{ animationDelay: '0.3s' }}>
            <img src="/assets/generated_images/traditional_breakfast_thali.png" alt="Breakfast Thali" />
            <div className="gallery-overlay">
              <span>Traditional Breakfast Thali</span>
              <span className="tamil">பாரம்பரிய காலை உணவு</span>
            </div>
          </div>
          <div className="gallery-item floating" style={{ animationDelay: '0.4s' }}>
            <img src="/assets/generated_images/traditional_desserts_display.png" alt="Desserts" />
            <div className="gallery-overlay">
              <span>Traditional Desserts</span>
              <span className="tamil">இனிப்பு வகைகள்</span>
            </div>
          </div>
          <div className="gallery-item floating" style={{ animationDelay: '0.5s' }}>
            <img src="/assets/generated_images/catering_service_staff.png" alt="Our Team" />
            <div className="gallery-overlay">
              <span>Our Professional Team</span>
              <span className="tamil">எங்கள் குழு</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
