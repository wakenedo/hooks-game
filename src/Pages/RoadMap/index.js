import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';

//Inner Components
import RoadMapTopText from './RoadMapTopText';
import RoadMapContent from './RoadMapContent';

const RoadMap = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    window.scrollTo({ top: 1740, behavior: 'smooth' });
    return (
        <Box
            backgroundColor='#FF3333'
            height='2785px'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={!isOpen} toggle={toggle} />
            <DropTheBallLogo />
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='44px'
                fontWeight='bold'
                color='#282C34'
                letterSpacing={5}
            >
                Road Map
            </Typography>
            <RoadMapTopText />
            <Box
                marginLeft='20px'
                marginTop='45px'
            >
                <RoadMapContent />
            </Box>
        </Box>
    )
}

export default RoadMap