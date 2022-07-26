import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material'

//Components
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import DropTheBallLogo from '../../components/DropTheBallLogo';

//Inner Components
import RoadMapTopText from './RoadMapTopText';
import RoadMap3 from './RoadMapTopText/RoadMap3';
import RoadMap2 from './RoadMapTopText/RoadMap2';
import RoadMap1 from './RoadMapTopText/RoadMap1';
import RoadMapText1 from './RoadMapTopText/RoadMapText1';
import RoadMapText2 from './RoadMapTopText/RoadMapText2';
import RoadMapText3 from './RoadMapTopText/RoadMapText3';

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
                Road Map
            </Typography>
            <RoadMapTopText />
            <Box
                marginLeft='20px'
                marginTop='45px'
            >
                <Stack>
                    <Stack
                        direction='row'
                        marginTop='45px'
                        marginBottom='45px'

                    >
                        <Box>
                            <RoadMap3 />
                        </Box>
                        <Box>
                            <RoadMapText3 />
                        </Box>
                    </Stack>
                    <Stack
                        direction='row'
                        marginTop='45px'
                        marginBottom='45px'
                    >
                        <Box>
                            <RoadMapText2 />
                        </Box>
                        <Box>
                            <RoadMap2 />
                        </Box>
                    </Stack>
                    <Stack
                        direction='row'
                        marginTop='45px'
                        marginBottom='45px'
                    >
                        <Box>
                            <RoadMap1 />
                        </Box>
                        <Box>
                            <RoadMapText1 />
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default RoadMap