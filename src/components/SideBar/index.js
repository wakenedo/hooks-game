import React from 'react'
import { Link } from 'react-router-dom'
//MaterialUi
import { Stack, Box, Typography } from '@mui/material'
//Assets
import BallIcon from '../../assets/svg/ball-svgrepo-com.svg'

const SideBar = ({isOpen, toggle}) => {
    


    return (
        <Stack 
        isOpen={isOpen}
        toggle={toggle}
            sx={{
                position: 'fixed',
                borderTopLeftRadius: '25px',
                zIndex: 999,
                width: '300px',
                height: '95%',
                background: '#F5F5F5',
                borderLeft: '1px solid #282C34',
                borderTop: '1px solid #282C34',
                alignItems: 'center',
                bottom: '0',
                transition: '0.75s ease-in-out',
                right: isOpen ? '0' : '-1000px'               
            }}
        >
            <Box
                height='fit-content'
                width={265}
                margin='auto'
                display='flex'
                flexDirection='column'
            >
                <Box
                    display='flex'
                    flexDirection='row'
                    margin='25px auto 13px'
                    width={255}
                    justifyContent='space-around'
                >
                    <img
                        alt='ball-icon'
                        width={25}
                        src={BallIcon} />
                    <Link
                        to='/AboutTheProject'
                        textDecoration='none'
                    >
                        <Typography
                        color='#282C34'
                        fontWeight='bold'
                        fontSize='18px'
                        >
                            About the Project
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    margin='25px auto 13px'
                    width={215}
                    justifyContent='space-between'
                >
                    <img
                        alt='ball-icon'
                        width={25}
                        src={BallIcon} />
                    <Link
                        to='/'
                    >
                        <Typography
                        color='#282C34'
                        fontWeight='bold'
                        fontSize='18px'
                        >
                            Road Map
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    margin='25px auto 13px'
                    width={215}
                    justifyContent='space-between'
                >
                    <img
                        alt='ball-icon'
                        width={25}
                        src={BallIcon} />
                    <Link
                        to='/'
                    >
                        <Typography
                        color='#282C34'
                        fontWeight='bold'
                        fontSize='18px'
                        >
                            How to Play
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    margin='25px auto 13px'
                    width={215}
                    justifyContent='space-between'
                >
                    <img
                        alt='ball-icon'
                        width={25}
                        src={BallIcon} />
                    <Link
                        to='/'
                    >
                        <Typography
                        color='#282C34'
                        fontWeight='bold'
                        fontSize='18px'
                        >
                            Combos
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    margin='25px auto 13px'
                    width={215}
                    justifyContent='space-between'
                >
                    <img
                        alt='ball-icon'
                        width={25}
                        src={BallIcon} />
                    <Link
                        to='/Contact'
                    >
                        <Typography
                        color='#282C34'
                        fontWeight='bold'
                        fontSize='18px'
                        >
                            Contact
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    margin='25px auto 13px'
                    width={215}
                    justifyContent='space-between'
                >
                    <img
                        alt='ball-icon'
                        width={25}
                        src={BallIcon} />
                    <Link
                        to='/'
                    >
                        <Typography
                        color='#282C34'
                        fontWeight='bold'
                        fontSize='18px'
                        >
                            Donate
                        </Typography>
                    </Link>
                </Box>
                
            </Box>
                <Box
                textAlign='center'
                >
                    <Typography>
                        All rights reserved to @wakenedo
                    </Typography>
                </Box>
        </Stack>
    )
}

export default SideBar