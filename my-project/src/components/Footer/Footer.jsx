import React from 'react';
import Logo1 from './e.png';
import Logo2 from './t.png';
import Logo3 from './c.png';

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className="section">
          <h2>An All-Round Plugin With Powerful Features</h2>
          <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
        </div>
      </div>
      <div className="fcard">
        <div className="card">
          <img src={Logo1} alt="Logo" />
          <h2>Light Weight</h2>
          <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
        <div className="card">
          <img src={Logo2} alt="Logo" />
          <h2>100% Responsive</h2>
          <p>Create a consistent visual experience across all devices.</p>
        </div>
        <div className="card">
          <img src={Logo3} alt="Logo" />
          <h2>User Friendly Interface</h2>
          <p>Ensure a smooth experience for both applicants and administrators.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
