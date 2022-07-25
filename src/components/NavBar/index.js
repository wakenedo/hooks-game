import React from 'react'
import { Box, IconButton } from '@mui/material'
import Menu from '../../assets/Nav/NavOpenButton.png'
const NavBar = ({toggle}) => {
    return (
        <Box
            backgroundColor='transparent'
            height='fit-content'
            width='100%'
            position="sticky"
            display='flex'
            z-index='999'
            sx={{
                justifyContent:'right',
                right: '0',
                top: '0'
            }}

        >
            <IconButton
            onClick={toggle}
            sx={{
                borderRadius: '0',
                width: 'fit-content'
            }}
                
            >
                <img
                    alt='menu'
                    src={Menu}

                />
            </IconButton>
        </Box>
    )
}

export default NavBar