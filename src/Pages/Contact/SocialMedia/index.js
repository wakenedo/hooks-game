import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

//Assets
import GithubIcon from '../../../assets/Contact/githubicon.png'
import LinkedinIcon from '../../../assets/Contact/linkedinicon.png'
import FigmaIcon from '../../../assets/Contact/figmaicon.png'
import DiscordIcon from '../../../assets/Contact/discordicon.png'

const SocialMedia = () => {
    return (
        <>
            <Box
                backgroundColor='#5A3392'
                maxWidth='1565px'
                height='120px'
                marginTop='35px'
                marginLeft='20px'
            >
                <Box
                    display='flex'
                >
                    <Box
                        
                    >
                        <Stack
                            direction='column'
                        >
                            <Box
                                marginLeft='20px'
                                marginTop='5px'
                            >
                                <Typography
                                    marginTop='5px'
                                    color='#FFFFFF'
                                    display='flex'
                                    letterSpacing='5px'
                                >
                                    <Box
                                        marginRight='10px'
                                    >
                                        <img
                                            alt='github'
                                            src={GithubIcon}
                                            width='25px'
                                        />
                                    </Box>
                                    <Typography
                                        marginRight='10px'
                                        letterSpacing='5px'
                                    >
                                        GitHub:
                                    </Typography>
                                    <Link to=''>
                                        @wakenedo
                                    </Link>
                                </Typography>
                                <Typography
                                    marginTop='5px'
                                    color='#FFFFFF'
                                    display='flex'
                                    letterSpacing='5px'
                                >
                                    <Box
                                        marginRight='10px'
                                    >
                                        <img
                                            alt='github'
                                            src={LinkedinIcon}
                                            width='25px'
                                        />
                                    </Box>
                                    <Typography
                                        marginRight='10px'
                                        letterSpacing='5px'
                                    >
                                        LinkedIn:
                                    </Typography>
                                    <Link to=''>
                                        @alexandre-alvarenga-developer
                                    </Link>
                                </Typography>
                                <Typography
                                    marginTop='5px'
                                    color='#FFFFFF'
                                    display='flex'
                                    letterSpacing='5px'
                                >
                                    <Box
                                        marginRight='10px'
                                    >
                                        <img
                                            alt='github'
                                            src={FigmaIcon}
                                            width='25px'
                                        />
                                    </Box>
                                    <Typography
                                        marginRight='10px'
                                        letterSpacing='5px'
                                    >
                                        Figma:
                                    </Typography>
                                    <Link to=''>
                                        @wakenedo
                                    </Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Box
                        marginLeft='250px'
                    >
                        <Stack
                            direction='column'
                        >
                            <Box
                                marginLeft='20px'
                                marginTop='5px'
                            >
                                <Typography
                                    marginTop='5px'
                                    color='#FFFFFF'
                                    display='flex'
                                    letterSpacing='5px'
                                >
                                    <Box
                                        marginRight='10px'
                                    >
                                        <img
                                            alt='github'
                                            src={DiscordIcon}
                                            width='25px'
                                        />
                                    </Box>
                                    <Typography
                                        marginRight='10px'
                                        letterSpacing='5px'
                                    >
                                        Discord:
                                    </Typography>
                                    <Link to=''>
                                        @wakenedo
                                    </Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SocialMedia