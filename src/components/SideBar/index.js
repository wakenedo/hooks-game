import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//MaterialUi
import { Stack, Box, Typography } from '@mui/material'
//Assets
import BallIcon from '../../assets/svg/ball-svgrepo-com.svg'

const SideBar = ({ isOpen, toggle }) => {
    const [active, setActive] = useState(false)

    const hover = () => {
        setActive(true);
    }



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
                alignItems='center'

            >
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    marginBottom='25px'
                >
                    <Box
                        marginRight='10px'
                    >
                        {active ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
                    </Box>

                    <Link
                        to='/About'
                        style={{
                            textDecoration: 'none'
                        }}
                    >

                        <Typography
                            color='#282C34'
                            fontWeight='bold'
                            fontSize='18px'

                            sx={{
                                '&:hover': {
                                    color: '#5A3392',
                                    active: `${hover}`

                                }
                            }}
                        >
                            About the Project
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    marginBottom='25px'
                >
                    <Box
                        marginRight='10px'
                    >
                        {active ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
                    </Box>
                    <Link
                        to='/Road_Map'
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            color='#282C34'
                            fontWeight='bold'
                            fontSize='18px'
                            sx={{
                                '&:hover': {
                                    color: '#5A3392',
                                }
                            }}
                        >
                            Road Map
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    marginBottom='25px'
                >
                    <Box
                        marginRight='10px'
                    >
                        {active ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
                    </Box>
                    <Link
                        to='/How_To_Play'
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            color='#282C34'
                            fontWeight='bold'
                            fontSize='18px'
                            sx={{
                                '&:hover': {
                                    color: '#5A3392',
                                }
                            }}
                        >
                            How to Play
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    marginBottom='25px'
                >
                    <Box
                        marginRight='10px'
                    >
                        {active ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
                    </Box>
                    <Link
                        to='/Combo_List'
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            color='#282C34'
                            fontWeight='bold'
                            fontSize='18px'
                            sx={{
                                '&:hover': {
                                    color: '#5A3392',
                                }
                            }}
                        >
                            Combo List
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    marginBottom='25px'
                >
                    <Box
                        marginRight='10px'
                    >
                        {active ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
                    </Box>
                    <Link
                        to='/Contact'
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            color='#282C34'
                            fontWeight='bold'
                            fontSize='18px'
                            sx={{
                                '&:hover': {
                                    color: '#5A3392',
                                }
                            }}
                        >
                            Contact
                        </Typography>
                    </Link>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                >
                    <Box
                        marginRight='10px'
                    >
                        {active ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
                    </Box>
                    <Link
                        to='/Donate'
                        style={{
                            textDecoration: 'none'
                        }}
                    >
                        <Typography
                            color='#282C34'
                            fontWeight='bold'
                            fontSize='18px'
                            sx={{
                                '&:hover': {
                                    color: '#5A3392',
                                }
                            }}
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