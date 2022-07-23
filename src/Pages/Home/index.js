import React from 'react'
import { Link } from 'react-router-dom';
import Ball from '../../assets/svg/basketball-svgrepo-com.svg'
import Title from '../../assets/Home/DropTheBall.png'
import Play from '../../assets/Home/Play.png'
import Menu from '../../assets/Nav/NavOpenButton.png'
import { Typography, Box, IconButton } from '@mui/material'

import '../../App.css';

const Home = () => {
  return (

    <div className="App">
        <Box
        backgroundColor='#FF3333'
        
        height={0}
        width='100%'
        position="sticky"
        
        >
          <IconButton
          
          >
          <img 
          src={Menu}
          
          />
          </IconButton>
        </Box>
      <header className="App-header">
        <img
          src={Title}
          style={{
            marginBottom: 25,
            marginTop: 85,

          }}
        />
        <Typography
          letterSpacing={5.5}
          sx={{
            fontSize: {
              xs: 23
            }
          }}
        >
          version 1.0.0
        </Typography>
        <img
          src={Ball} className="App-logo" alt="Drop the ball"
          style={{
            width: 300,
            marginBottom: 95,
            marginTop: 90
          }}
        />
        <Link
          to='./HooksGame'
          style={{
            textDecoration: 'none',
          }}
        >
          <img
            src={Play}
            style={{

              marginBottom: 85,

            }}
          />
        </Link>

      </header>
    </div>


  )
}

export default Home