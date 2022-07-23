import React from 'react'
import { Link } from 'react-router-dom';
import Ball from '../../assets/svg/ball-svgrepo-com.svg'

import '../../App.css';

const Home = () => {
  return (
   
        <div className="App">
          <header className="App-header">
            <img
            style={{
              width: 300,
              marginBottom: 45
            }}
            
            src={Ball} className="App-logo" alt="Drop the ball" />
            <Link             
            to='./HooksGame'
            style={{
              textDecoration: 'none',
              color: '#ff3333'
            }}
            >
              PLAY
            </Link>
            
          </header>
        </div>
      
    
  )
}

export default Home