import React, { useState } from 'react'



//MaterialUi
import { Box, Stack } from '@mui/material'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

//Inner Components
import PlayButton from './PlayButton';
import Title from './Title';
import Version from './Version';
import BallImage from './BallImage';



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
        <Title />
        <Version />
        <BallImage />
        <PlayButton />

      </Stack>
    </Box >


  )
}

export default Home