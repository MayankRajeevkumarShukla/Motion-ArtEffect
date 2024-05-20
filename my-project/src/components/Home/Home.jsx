import React from 'react';
import logo1 from './s.png';
import logo2 from './p.png';
import logo3 from './w.png';

function Home() {
  return (
    <div className='homec'>
      <div>
        <h2 className='homeH'>
          Apply On Any Section Or Enable For Whole Page
        </h2>
      </div>
      <div className='cadss'>
        <div className="cards">
          <div className='card1'>
            <h2>Apply On Section</h2>
            <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
            <img src={logo1} alt="" />
          </div>
        </div>
        <div className="cards card2">
          <div className='card1'>
            <h2>Apply On Page</h2>
            <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
            <img src={logo2} alt="" />
          </div>
        </div>
      </div>
      <div className="box">
        <h2>Supported by All Popular Browsers</h2>
        <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
        <div className="container">
            <img src={logo3} alt="" />
            
        </div>
      </div>


    </div>
  );
}

export default Home;
