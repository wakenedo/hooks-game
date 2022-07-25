import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';

//Inner Components
import ExplanationCombo from './ExplanationCombo';
import _ComboList from './_ComboList';

const ComboList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Box
            backgroundColor='#FF3333'
            height='540px'
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
                Combo List
            </Typography>
            <Box
                marginTop='45px'
                paddingBottom='35px'

            >
                <ExplanationCombo />
            </Box>
            <Box
                marginTop='55px'
                backgroundColor='#FFEB33'
                height='615px'
            >
                <Box
                marginLeft='20px'
                >
                    <_ComboList />
                </Box>

            </Box>
        </Box>
    )
}

export default ComboList