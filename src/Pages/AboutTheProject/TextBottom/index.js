import React from 'react'

import { Box, Typography } from '@mui/material'


const TextBottom = () => {
    return (
        <Box>
            <Typography
                marginTop='45px'
                marginLeft='45px'
                fontSize='33px'
                color='#282C34'
                letterSpacing={5}
            >
                That's it !
            </Typography>
            <Typography
                marginTop='15px'
                marginLeft='45px'
                fontSize='14.5px'
                color='#282C34'
                letterSpacing={5}
                maxWidth='675px'
                textAlign='justify'
            >
               Let's wrap up here, so this is a passion project and a very crazy one, I am hoping to make a game using only react default hooks, and also a npm-package for react to go along with it. For now it's only maintained and developed by me, so any help is welcome, in any form, from feedback to donations. I assume that you did understand the whole intention of this project by the end of this page, I mean, you probably understand a little more about the spirit behind it, but if you're looking for more a technical description there is Road Map page to explain with more details about the phases and implementations for each step of the game. I appreciate you're attention and I hope to see you around. And most important, go break some sweat and Drop The Ball   
            </Typography>
        </Box>
    )
}

export default TextBottom