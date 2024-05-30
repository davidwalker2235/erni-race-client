import React from "react";
import './Layer.css'

const Layer = ({image, position, isAnimate, velocity}: { image: any, position: number, isAnimate: boolean, velocity: number }) => {

  return (
    <div className="parallax-container">
      <img
        style={{
          transform: `translateY(${position}%) ${isAnimate ? 'translateX(-100vw)' : 'translateY(0vh)' }`,
          transition: `transform ${velocity}s linear`
      }}
        className={`image ${isAnimate ? 'animate' : ''}`}
        src={image}
        alt={image.toString()}/>
    </div>
  );
}

export default Layer;