import React, { useState } from 'react'

import { Box, Typography, Stack } from '@mui/material'

//Assets
import PiggyBank from '../../assets/gif/piggy.gif'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';
import WhyDonate from './WhyDonate';
import DonateFooter from './DonateFooter';

const Donate = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    
    return (
        <Box
            backgroundColor='#FF3333'
            height='710px'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={!isOpen} toggle={toggle} />
            <DropTheBallLogo />
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='44px'
                fontWeight='bold'
                color='#5A3392'
                letterSpacing={5}
            >
                Donate
            </Typography>
            <Box
                marginTop='45px'
                paddingBottom='35px'
            >
                <Stack
                    direction='row'
                >
                    <Box
                        marginLeft='20px'
                        marginBottom='45px'
                    >

                        <img
                            width='550px'
                            alt='animated'
                            src={PiggyBank} />
                    </Box>
                    <Box>
                        <WhyDonate />

                    </Box>
                </Stack>
            </Box>
            <Box
                backgroundColor='#3388FF'
                height='475px'
            >
                <Box
                marginLeft='20px'
                >
                    <DonateFooter />
                </Box>
            </Box>
        </Box>
    )
}

export default Donate