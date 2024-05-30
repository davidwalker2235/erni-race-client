import React from "react";
import './Layer.css';

interface LayerProps {
  image: string;
  styles?: any;
  isAnimate: boolean;
  velocity: number;
}

const Layer: React.FC<LayerProps> = ({ image, styles, isAnimate, velocity }) => {
  return (
    <div className="parallax-container">
      <div
        className={`image-container ${isAnimate ? 'animate' : ''}`}
        style={{
          ...styles,
          animationDuration: `${velocity}s`,
        }}
      >
        <img src={image} alt="Layer Image1" />
        <img src={image} alt="Layer Image2" />
      </div>
    </div>
  );
};

export default Layer;