import React from 'react'
import { Box } from '@mui/material'
//Assets
import BasketBall from '../../../../assets/svg/basketball-svgrepo-com.svg'

const Ball = ({ marginTop }) => {

    return (
        <Box
            width="100%"
            height='100%'
        >
            <img
                style={{
                    marginTop: `${marginTop}`,
                    transition: '0.2 smooth',
                    marginLeft: '520px'
                }}
                src={BasketBall}
                width={150}
                alt='ball'
            />
        </Box>
    )
}

export default Ball