import React from 'react'
import { Typography } from '@mui/material'

const Score = ({ points }) => {
    return (
        <Typography
            variant='h5'
            textAlign="center"
        >
            Points : {points}
        </Typography>
    )
}

export default Score