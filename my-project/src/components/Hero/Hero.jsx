import React from 'react';
import Logo1 from './g.png';
import Logo2 from './l.png';
import Logo3 from './w.png';
import Logo4 from './s.png';
import mw from './mw.png';


function Hero() {
  return (
    <div className='Heroc'>
      <div>
        <h2 className='heroh'>Trusted by thousands of users around the world</h2>
        <div className=''>
          <div className='imgL'>
            <span>
              <img src={Logo1} alt="" />
              <img src={Logo4} alt="" />
              
            </span>
            <span>
              <img src={Logo2} alt="" />
              <img src={Logo4} alt="" />
              
            </span>
            <span>
              <img src={Logo3} alt="" />
              <img src={Logo4} alt="" />
            </span>
              
          </div>
        </div>
        <div className='heromw'>
         <h2>
         Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
         </h2>
         <div>
          <p>
          Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
          </p>
         </div>
         <button>
         Purchase From Envato  {`→`}
         </button>
        </div>
        <div className='mw'>
          <img src={mw} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
