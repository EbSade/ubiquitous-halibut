import React, { useState, useEffect } from 'react';
import'../My.css';
import'../fontawesome-free-6.1.2-web/css/all.min.css';

function Menu() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const openNav = () => {
    document.getElementById("myNav").style.height = "50vw";
  };

  // تابع برای دریافت تصویر جدید
  const fetchImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://picsum.photos/600/400'); // دریافت یک تصویر تصادفی
      if (response.ok) {
        setImage(response.url);
      } else {
        console.error('دریافت تصویر ناموفق بود');
      }
    } catch (error) {
      console.error(':خطا در دریافت تصویر', error);
    } finally {
      setLoading(false);
    }
  };

  // دریافت تصویر اولیه در زمان بارگذاری کامپوننت
  useEffect(() => {
    fetchImage();
  }, []);

  // تابع برای نمایش تصویر بعدی
  const handleNext = () => {
    fetchImage();
  };

  return (
    <div>
      <menu>
        <div className="avatar">
          <div className="avatar_img" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}></div>
          <div className="avatar_p">
            <p>ابراهیم صادقی</p>
          </div>
        </div>

        <div style={{ cursor: 'pointer' }} onClick={openNav}>منو &#9776;</div>
      </menu>

      {/* Modal */}
      {showModal && (
        <div className="modal-gallery" onClick={() => setShowModal(false)}>
          <div className="modal-gallery-content" onClick={(e) => e.stopPropagation()}>
            {loading ? (
              <p>... در حال بارگذاری</p>
            ) : (
              <img src={image} alt=" My Random Avatar Not Exist! " style={{ width: '35vw', height: 'auto', borderRadius: '3vw' }} />
            )}
            <button onClick={handleNext}>تصویر بعدی</button>
            <button onClick={() => setShowModal(false)}>بستن</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
