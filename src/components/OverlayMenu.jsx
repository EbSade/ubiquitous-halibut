import React from 'react';
import'../My.css';

function OverlayMenu() {
  const closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
  };

  return (
    <div id="myNav" className="overlay">
      <a href="#" className="closebtn" onClick={(e) => { e.preventDefault(); closeNav(); }}>&times;</a>
      <div className="overlay-content">
        <a href="#about" onClick={closeNav}>درباره من</a>
        <a href="#education" onClick={closeNav}>تحصیلات</a>
        <a href="#skills" onClick={closeNav}>مهارت‌ها</a>
        <a href="#contact" onClick={closeNav}>تماس با من</a>
      </div>
    </div>
  );
}

export default OverlayMenu;
