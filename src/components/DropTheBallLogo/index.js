import React from 'react'
//Assets
import DropTheBall from '../../assets/Logo.png'

import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const DropTheBallLogo = () => {
    return (
        
            <Box
                backgroundColor='#FF3333'
                marginLeft='20px'
            >
                <Link
                    to='/'
                >
                    <img src={DropTheBall} alt='drop-the-ball' />
                </Link>
            </Box>
        
    )
}

export default DropTheBallLogo