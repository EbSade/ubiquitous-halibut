import React, { useState } from 'react';
import '../My.css';
import '../fontawesome-free-6.1.2-web/css/all.min.css';

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('تمام فیلدها باید پر شوند');
      return;
    }

    const data = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(), // اضافه کردن زمان ارسال
    };

    try {
      const response = await fetch('http://localhost:5000', { // آدرس سرور
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalOpen(true); // نمایش پیام موفقیت
        setFormData({ name: '', email: '', message: '' }); // پاک کردن فرم
      } else {
        const errorText = await response.text();
        alert(`خطا: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('مشکلی در ارسال پیام وجود دارد');
    }
  };

  return (
    <section id="contact" className="contact">
      <i className="fas fa-envelope fa-lg"></i>
      <h2>تماس با من</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label htmlFor="name">نام</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputs">
          <label htmlFor="message">پیام</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">ارسال</button>
      </form>

      {modalOpen && (
        <div className="modal modal-open" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <p>پیام شما با موفقیت ارسال شد!</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
