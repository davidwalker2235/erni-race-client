import React, {useState} from "react";
import {closeBuild, farBuild, moon, pista, sky} from '../images'
import './Game.css'
import Layer from "../components/Layer";
import {Button} from "@mui/material";

const Game = () => {
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
    setAnimate(!animate);
  };

  return (
    <div style={{overflow: "hidden"}}>
      <Layer image={farBuild} isAnimate={animate} velocity={10}/>
      <Layer image={closeBuild} isAnimate={animate} velocity={8}/>
      <Layer image={pista} styles={{top: 'unset'}} isAnimate={animate} velocity={5}/>
      <img className="sky" src={sky} alt="sky"/>
      <img className="moon" src={moon} alt="moon"/>
      <Button onClick={startAnimation} sx={{zIndex: 1000}}>sdfsdf</Button>
    </div>
  );
}

export default Game;