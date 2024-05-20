import React, { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';
function Background() {
    const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    if (c) {
      Fluid(c);
    }
  }, []);
  return (
    <div>
       <canvas ref={canvas} className="background-cavas" />
    </div>
  )
}

export default Background
