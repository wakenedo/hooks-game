import React from 'react'
import { Typography } from '@mui/material'

const Score = ({ points }) => {
    return (
        <Typography
            variant='h5'
            fontSize='50px'
            textAlign="center"
            fontFamily='Mouse Memoirs, sans-serif;'
        >
            Points : {points}
        </Typography>
    )
}

export default Score