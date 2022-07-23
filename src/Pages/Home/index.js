import React from 'react'
import { Link } from 'react-router-dom';
import Ball from '../../assets/svg/basketball-svgrepo-com.svg'
import Title from '../../assets/Home/DropTheBall.png'
import Play from '../../assets/Home/Play.png'
import Menu from '../../assets/Nav/NavOpenButton.png'
import { Typography, Box } from '@mui/material'

import '../../App.css';

const Home = () => {
  return (

    <div className="App">
      <header className="App-header">
        <Box
        display="flex-end"
        height={40}
        width='100%'
        position="sticky"
        right='0'
        >
          <img 
          src={Menu}
          />
        </Box>
        <img
          src={Title}
          style={{
            marginBottom: 25,

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