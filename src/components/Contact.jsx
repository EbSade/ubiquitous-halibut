import React, { useState } from 'react';
import'../My.css';
import'../fontawesome-free-6.1.2-web/css/all.min.css';

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="contact">
      <i className="fas fa-envelope fa-lg"></i>
      <h2>تماس با من</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        setModalOpen(true);
      }}>
        <div className="inputs">
          <label htmlFor="name">نام</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="inputs">
          <label htmlFor="email">ایمیل</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="inputs">
          <label htmlFor="message">پیام</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">ارسال</button>
      </form>

      {modalOpen && (
        <div className="modal modal-open" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <p>!پیام شما ارسال شد</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
