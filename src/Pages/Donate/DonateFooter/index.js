import React from 'react'

import { Typography, Box } from '@mui/material'

//InnerComponents
import Paypal from './Paypal'
import Patreon from './Patreon'


const DonateFooter = () => {
    return (
        <>
            <Typography
                paddingTop='45px'
                fontWeight='bold'
                fontSize='33px'
                color='#282C34'
                letterSpacing={5}
            >
                Every drop counts
            </Typography>
            <Box
                marginTop='35px'
                marginLeft='345px'


            >
                <Paypal />
                <Patreon />
            </Box>
            <Typography
                marginTop='15px'
                fontSize='14.5px'
                color='#282C34'
                letterSpacing={5}
                maxWidth='1542px'
                textAlign='justify'
            >
                Choose how you want to help the project, is it with a fixed donation or feel like subscribing it's up to you ! We're at Phase 1 at the moment so every penny counts. Let's make Drop The Ball be a legendary internet game!
            </Typography>
        </>
    )
}

export default DonateFooter