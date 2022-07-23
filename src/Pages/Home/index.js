import React from 'react'
import { Link } from 'react-router-dom';
import Ball from '../../assets/svg/basketball-svgrepo-com.svg'
import Title from '../../assets/Home/DropTheBall.png'
import Play from '../../assets/Home/Play.png'

import { Typography, Box, Stack } from '@mui/material'
import NavBar from '../../components/NavBar';



const Home = () => {
  return (

    <Box
      backgroundColor='#FF3333'
      height='100vh'
    >
      <NavBar />
      <Stack
        sx={{
          backgroundColor: '#FF3333',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',

        }}
      >
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

      </Stack>
    </Box >


  )
}

export default Home