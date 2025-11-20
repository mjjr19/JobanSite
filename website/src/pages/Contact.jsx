import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import FadeInSection from '../components/animations/FadeInSection';
import { contactCategories } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: contactCategories[0],
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. This is a demo form.');
    // Handle submission logic here
  };

  return (
    <div className="page-content section-padding" style={{ marginTop: '80px' }}>
      <div className="container">
        <SectionHeader title="Contact Sheikh Joban" subtitle="Get in Touch" />
        
        <div className="contact-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeInSection>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Purpose</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit', backgroundColor: 'white' }}
                >
                  {contactCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;

