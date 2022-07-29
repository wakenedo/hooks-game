import React from 'react'
import { Typography } from '@mui/material'

const HowToPlayTopText = () => {
    return (
        <>
            <Typography
                marginTop='45px'
                marginLeft='20px'
                fontSize='33px'
                color='#282C34'
                fontWeight='bold'
                letterSpacing={5}
            >
                It's easy as cake
            </Typography>
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='14.5px'
                color='#FFFF'
                letterSpacing={5}
                maxWidth='1565px'
                textAlign='justify'
            >
                Drop the ball is a game with a simple objective, and very easy to pick up, you have to drop the ball to make points. Different combination of buttons are different combos that award different values of points. Check the Combo List page to understand better the types of combo you can make. Go break some sweat and make some points, are you going to be a Super Combo freak or just Super Whack? In the alpha version the only mode of the game is the regular, with no cool achievements or High Scores yet. In the Road Map,  you can check more information about the phases of the project and what is the goals and implementations map for each one.
            </Typography>
        </>
    )
}

export default HowToPlayTopText