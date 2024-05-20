import React from 'react';
import logo from './MotionArtEffect-logo.png';

function Navbar({ isActive }) {
  return (
    <div className="mb-8">
      <div style={{ display: 'flex', alignItems: 'center', margin: '20px 20px 0' }}>
        <img
          src={logo}
          alt="Motion Art Effect Logo"
          style={{ marginLeft: '300px',marginRight: 'auto', marginTop: '10px' }}
        />
        <button
          type="button"
          className={`rounded-md border border-black px-5 py-4 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
            ${isActive ? 'bg-transparent' : 'bg-white'}`}
          style={{ marginTop: '10px', marginLeft: '10px', marginRight: '300px' }}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
