import React, { useState } from 'react'

import { Box, Typography, Stack } from '@mui/material'

//Assets
import LightBulb from '../../assets/svg/lightbulb-svgrepo-com.svg'
import Ok from '../../assets/gif/okgif.gif'
import BBall from '../../assets/svg/basketball-svgrepo-com.svg'



//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';

//Inner Components
import TextTop from './TextTop';
import TextMid from './TextMid';
import TextLow from './TextLow';
import TextBottom from './TextBottom';

const AboutTheProject = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });

    return (
        <Box
            backgroundColor='#FF3333'
            height='1470px'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <DropTheBallLogo />
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='44px'
                fontWeight='bold'
                color='#5A3392'
                letterSpacing={5}
            >
                About The Project
            </Typography>
            <Typography
                marginTop='15px'
                paddingBottom='20px'
                marginLeft='20px'
                fontSize='25px'
                fontWeight='light'
                color='#FFFF'
                letterSpacing={5}
            >
                “This project is a product of inspiration”
            </Typography>
            <Box
            marginTop='45px'
            >
                <Stack
                    direction='row'
                >
                    <Box
                        marginLeft='20px'
                    >

                        <img
                            width='625px'
                            alt='animated'
                            src={BBall} />
                    </Box>
                    <Box>
                        <TextTop />

                    </Box>
                </Stack>
            </Box>
            <Box
            marginTop='45px'
            >
                <Stack direction='row'>
                    <TextMid />
                    <Box
                        marginLeft='115px'
                    >
                        <img
                            alt='mid-content'
                            src={LightBulb}
                        />
                    </Box>
                </Stack>
            </Box>
            <Box
                backgroundColor='#3388FF'
                height='850px'
            >
                <TextLow />
                <Box
                marginTop='45px'
                >
                    <Stack direction='row' >
                        <Box
                           marginLeft='20px'
                           marginTop='55px'
                        >
                            <img
                                alt='ok-gif'
                                src={Ok}
                                style={{
                                    width: '780px'
                                }}
                            />

                        </Box>
                        <TextBottom />
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutTheProject