import React from 'react'
import { Box, Typography } from '@mui/material'

const TextMid = () => {
    return (
        <Box>
            <Typography
                marginTop='45px'
                marginLeft='20px'
                fontSize='33px'
                color='#FFFF'
                letterSpacing={5}
            >
                A strike of inspiration !
            </Typography>
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='14.5px'
                color='#FFFF'
                letterSpacing={5}
                maxWidth='855px'
                textAlign='justify'
            >
                Inspiration, is a call, something you cannot dismiss that easy. And as the statement above says, this is a project of inspiration. Something that gradually came into fruition. I was studying React Hooks and something pop into my mind, would it be possible to make a somewhat complex using only hooks? And basically only React? That came when I was coding the ball, first I thought of an animated svg, but then something clicked, I could make the ball moving using states, and also the points system and combo, so as I was thinking , I realized it was an inspiration, something I had to do, so I started to code the basics of the game, and then the site came into being, and it's been so much fun to develop this so far. So for me It is already a great experience.   
            </Typography>
        </Box>
    )
}

export default TextMid