import React from 'react'
import { Typography } from '@mui/material'

const ExplanationCombo = () => {
    return (
        <>
            <Typography
                marginTop='45px'
                marginLeft='20px'
                fontSize='33px'
                color='#FFFF'
                letterSpacing={5}
            >
                How Combo Works
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
                Combos are the main mechanic of Drop The Ball, you want to accumulate points to be the best right? Combos are the way of making points there are six type of combos you can make on Drop The Ball, Regular Combos, Weak Combos, WhackCombos, WeirdCombos, Weakest Combos and Super Combos which are Super Combo the most rewarding move and Super Whack the move you want to avoid. Each type of combo reward different values of points where you can check out at the game on the logs. Now that you know everything there is to know about combos for now, you should break some sweat and Drop The Ball.
            </Typography>
        </>
    )
}

export default ExplanationCombo