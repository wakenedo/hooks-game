import React, { useState } from 'react'

import { Box, Typography } from '@mui/material'

//Constants
import texts from '../../constants/texts.jsx'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';
import ContactCreator from './ContactCreator/index.js';
import SocialMedia from './SocialMedia/index.js';
import EmailUs from './EmailUs/index.js';


console.log(texts)

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    
    return (
        <Box
            backgroundColor='#FF3333'
            height='1080px'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <DropTheBallLogo />
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='44px'
                fontWeight='bold'
                color='#FFFF'
                letterSpacing={5}
            >
                Contact
            </Typography>
            <ContactCreator />
            <SocialMedia/>
            <EmailUs />
        </Box>
    )
}

export default Contact