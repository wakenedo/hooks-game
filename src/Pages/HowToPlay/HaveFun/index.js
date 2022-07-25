import React from 'react'

import { Box, Typography } from '@mui/material'


const TextBottom = () => {
    return (
        <Box>
            <Typography
                marginTop='45px'
                marginLeft='20px'
                fontSize='33px'
                color='#282C34'
                letterSpacing={5}
            >
                The most important , have fun !
            </Typography>
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='14.5px'
                color='#282C34'
                letterSpacing={5}
                maxWidth='735px'
                textAlign='justify'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit nunc sed nunc iaculis interdum. Suspendisse nisi dui, vestibulum vel ornare a, feugiat ut ligula. Vestibulum luctus at elit ut cursus.
                Quisque luctus efficitur sollicitudin. Nulla fringilla nisl mi, sed consequat velit tincidunt vitae. Etiam quis cursus felis, at iaculis nulla. Aenean eget eleifend tortor. Etiam tristique velit et fermentum aliquet. Vivamus eget magna viverra, cursus risus ac, interdum purus.
                Curabitur semper imperdiet consequat. Integer gravida tellus neque, ac vehicula nisl maximus in. Vestibulum vitae risus neque.Quisque rutrum tellus id eros varius sagittis. Praesent malesuada justo quis dui porta lacinia. Aliquam rhoncus felis sit amet interdum dignissim. Morbi iaculis cursus risus et faucibus.
                Ut mattis arcu sed placerat maximus. Nam mollis, risus ac pellentesque faucibus, felis leo mattis orci, in porta diam nunc in mauris. Curabitur et quam non ligula placerat tempus. Sed interdum arcu sit amet odio sagittis, nec auctor purus faucibus.
            </Typography>
        </Box>
    )
}

export default TextBottom