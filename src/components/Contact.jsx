
import React from 'react';

const Contact = () => {
  const address = "No. 13/8, Pugazhendhi Street, MGR Nagar, K. K. Nagar, Chennai - 600078";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Contact Us</h2>
          <p className="section-subtitle">எங்களை தொடர்பு கொள்ளுங்கள்</p>
        </div>
        <div className="contact-content">
          <div className="contact-card floating">
            <div className="contact-icon whatsapp">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/917448312744">74483 12744</a>
          </div>
          <div className="contact-card floating" style={{ animationDelay: '0.2s' }}>
            <div className="contact-icon phone">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <h3>Cell</h3>
            <a href="tel:+918925626963">89256 26963</a>
          </div>
          <div className="contact-card floating" style={{ animationDelay: '0.4s' }}>
            <div className="contact-icon location">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <h3>Address | முகவரி</h3>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <p>No. 13/8, Pugazhendhi Street,<br />MGR Nagar, K. K. Nagar,<br />Chennai - 600078</p>
            </a>
          </div>
           <div className="contact-card floating map" style={{ animationDelay: '0.6s' }}>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <div className="map-container">
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=400x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${encodeURIComponent(address)}`} alt="Location on Google Maps" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
