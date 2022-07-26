import React from 'react'

import { Typography, Box } from '@mui/material'

import ComboRight from '../../../assets/ComboList/ComboRight.png'
import ComboLeft from '../../../assets/ComboList/ComboLeft.png'



const Combos = () => {
    return (
        <>
            <Typography
                paddingTop='45px'

                fontSize='33px'
                color='#282C34'
                letterSpacing={5}
            >
                Combo List
            </Typography>
            <Box
            display='flex'
            alignItems='center'
            marginTop='25px'
            >
                <Box>
                    <img 
                    alt='combos-left' 
                    src={ComboLeft}
                    width='550px'
                    />
                </Box>
                <Box
                marginLeft='250px'
                >
                    <img 
                    alt='combos-right' 
                    src={ComboRight}
                    width='550px'
                    />
                </Box>
            </Box>
        </>
    )
}

export default Combos