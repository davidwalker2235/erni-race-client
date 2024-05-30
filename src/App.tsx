import React, {useContext, useEffect} from 'react';
import {erniRaceLogo, rays} from './images'
import UseConnectionManager from "./hooks/UseConnectionManager";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {AppContext} from "./providers/appProvider";

import './App.css';

function App() {
  const navigate = useNavigate()
  const context = useContext(AppContext)
  const {connect} = UseConnectionManager()

  useEffect(() => {
    if (context.isConnected) navigate('/game')
  }, [context?.isConnected]);

  return (
      <div className='cover-background'>
          <div className="x-rays">
              <img id="rotating-image" src={rays} alt="Rotating" width={3000} height={3000}/>
          </div>
          <img
              src={erniRaceLogo}
              className="logo"
              width={500}
              height={500}
              alt="logo of the app"
          />
          <Button
              variant="contained"
              onClick={() => connect()}
              sx={{
                  position: 'absolute',
                  top: '80%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '100%',
                  height: 'auto'
              }}>
              Connect
          </Button>
      </div>
  );
}

export default App;
