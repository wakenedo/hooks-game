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
                
                fontSize='33px'
                color='#FFFF'
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
                color='#FFFF'
                letterSpacing={5}
                maxWidth='1542px'
                textAlign='justify'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc sed nunc iaculis interdum. Suspendisse nisi dui, vestibulum vel ornare a, feugiat ut ligula. Vestibulum luctus at elit ut cursus.
                Quisque luctus efficitur sollicitudin. Nulla fringilla nisl mi, sed consequat velit tincidunt vitae. Etiam quis cursus felis, at iaculis nulla. Aenean eget eleifend tortor. Etiam tristique velit et fermentum aliquet. Vivamus eget magna viverra, cursus risus ac, interdum purus.
                Curabitur semper imperdiet consequat. Integer gravida tellus neque, ac vehicula nisl maximus in. Vestibulum vitae risus neque.Quisque rutrum tellus id eros varius sagittis. Praesent malesuada justo quis dui porta lacinia. Aliquam rhoncus felis sit amet interdum dignissim. Morbi iaculis cursus risus et faucibus.
                Ut mattis arcu sed placerat maximus. Nam mollis, risus ac pellentesque faucibus, felis leo mattis orci, in porta diam nunc in mauris. Curabitur et quam non ligula placerat tempus. Sed interdum arcu sit amet odio sagittis, nec auctor purus faucibus.
            </Typography>
        </>
    )
}

export default DonateFooter