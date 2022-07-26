import React from 'react'
import { Typography, Box } from '@mui/material'

const RoadMapText1 = () => {
    return (
        <Box
        marginLeft='90px'
        >
            <Typography
                fontSize='33px'
                color='#FFFF'
                letterSpacing={5}
            >
                Phase 1
            </Typography>
            <Typography
                marginTop='15px'
                fontSize='14.5px'
                color='#FFFF'
                letterSpacing={5}
                maxWidth='585px'
                textAlign='justify'
            >
                This phase is the building phase, which consists in setting up a foundation to the project, it will be the Regular Version of the game, once it's first version is complete the web site will go live. This is Alpha 1 step, when its working as intended the development of the Alpha 2 step will start, users will have user area were later they will be able to log in the game and check their achievements, invite friends, complete challenges, and more. This first user area will only display your name, e-mail and change password. Also in Alpha 2 there will be implemented GitHub and Google Auth. Alpha 3 will be added User Stats to User Page, where you will be able to check your membership, and other statistics for combos, balls dropped, click speed. Also the High Scores will be added to the User Page where will display your top 10 scores. By the end of Phase 1 the game will start to take shape, with a User Page set up, the foundations for the player interactions will be set to build upon. Also the regular version of the game will be mechanically updated with some new features like timers to keep the ball dropping, improved points and combo logs, options to change the UI, updated animations and backgrounds.   
            </Typography>
        </Box>
    )
}

export default RoadMapText1