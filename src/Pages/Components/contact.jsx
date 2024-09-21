import React from 'react';

const ContactPage = () => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#2c3e50' }}>Contact Us</h1>
        <p style={{ color: '#7f8c8d' }}>We would love to hear from you! Please fill out the form below.</p>
      </header>

      <form>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>Name</label>
          <input type="text" id="name" name="name" required style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #bdc3c7',
            borderRadius: '5px',
            fontSize: '1rem'
          }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>Email</label>
          <input type="email" id="email" name="email" required style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #bdc3c7',
            borderRadius: '5px',
            fontSize: '1rem'
          }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#34495e' }}>Message</label>
          <textarea id="message" name="message" rows="4" required style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #bdc3c7',
            borderRadius: '5px',
            fontSize: '1rem'
          }}></textarea>
        </div>

        <button type="submit" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
