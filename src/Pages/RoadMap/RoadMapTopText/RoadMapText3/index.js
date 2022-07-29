import React from 'react'
import { Typography, Box } from '@mui/material'

const RoadMapText3 = () => {
    return (
        <Box
        marginLeft='100px'
        >
            <Typography              
                fontSize='33px'
                color='#282C34'
                letterSpacing={5}
                fontWeight='bold'
            >
                Phase 3
            </Typography>
            <Typography
                marginTop='15px'
                fontSize='14.5px'
                color='#ffff'
                letterSpacing={5}
                maxWidth='585px'
                textAlign='justify'
            >
                This is it, we made it to the end. It's just 3 more steps, Drop The Ball version 1.0.0 will be running and with the launch the community pre-season will end so the Launch Event can start. The version 1.1.0 is to implement two new game modes Extreme Mode for the hardcore players, with reduced timers, and challenges always on to get the biggest score of all times and Match The Trick Mode a fun mode to play with your friends and match the order of the combos, and improved User stats for all modes of the game. Then the 1.2.0 is the last milestone, thats it the end of the Road Map the game is healthy and has attracted a community and it is 1337. Oh yes, this is the Road Map it's meant to be serious. Yes, yes I know that, Im all serious. Anyway, the last thing now to implement and share with the world is the npm-package with Drop The Ball to anyone who wants to implement the Earliest versions of the game on their react project just to remember everyone how states can be very useful and also fun. If this project reaches this goal Im going to be proud of myself, Daaammmnn!
            </Typography>
        </Box>
    )
}

export default RoadMapText3