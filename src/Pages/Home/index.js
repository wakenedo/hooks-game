import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//Assets
import Ball from '../../assets/svg/basketball-svgrepo-com.svg'
import Title from '../../assets/Home/DropTheBall.png'
import Play from '../../assets/Home/Play.png'

//MaterialUi
import { Typography, Box, Stack } from '@mui/material'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (

    <Box
      backgroundColor='#FF3333'
      height='100vh'
    >
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
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
          alt='title'
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
          src={Ball} alt="Drop the ball"
          style={{
            width: 300,
            marginBottom: 95,
            marginTop: 90
          }}
        />
        <Link
          to='./Hooks_Game'
          style={{
            textDecoration: 'none',
          }}
        >
          <img
            alt='play'
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