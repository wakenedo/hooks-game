import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';

//Inner Components
import HowToPlayTopText from './HowToPlayTopText';
import HowToPlay1 from './HowToPlay1';
import HowToPlay2 from './HowToPlay2';
import HowToPlay3 from './HowToPlay3';
import HaveFun from './HaveFun'

//Assets
import HaveFunGif from '../../assets/gif/havefun.gif'


const HowToPlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    return (
        <Box
            backgroundColor='#FF3333'
            height='520px'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <DropTheBallLogo />
            <Box
            marginBottom='40px'
            >

            <Typography
                marginTop='15px'
                marginLeft='20px'
                margin='20px'
                fontSize='44px'
                fontWeight='bold'
                color='#FFFF'
                letterSpacing={5}
            >
                How to Play
            </Typography>
            </Box>
            <HowToPlayTopText />
            <Box
                backgroundColor='#FFEB33'
                marginTop='65px'

            >
                <Stack
                    marginLeft='550px'
                >
                    <Box
                    marginTop='45px'
                    paddingTop='45px'
                    >
                        <HowToPlay1 />
                    </Box>
                    <Box>
                        <HowToPlay2 />
                    </Box>
                    <Box
                    marginBottom='45px'
                    paddingBottom='45px'
                    >
                        <HowToPlay3 />
                    </Box>
                </Stack>
            </Box>
            <Stack
            backgroundColor='#3388FF' 
            direction='row' 
            height='550px'
            marginTop='25px'
            paddingTop='45px'
            >
                <HaveFun />
                        <Box
                           marginLeft='252px'
                           marginTop='55px'
                           
                        >
                            <img
                                alt='havefun-gif'
                                src={HaveFunGif}
                                style={{
                                    width: '380px'
                                }}
                            />

                        </Box>
                    </Stack>
        </Box>
    )
}

export default HowToPlay