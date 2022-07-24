import React from 'react'
import { Box, IconButton } from '@mui/material'
import Menu from '../../assets/Nav/NavOpenButton.png'
const NavBar = ({toggle}) => {
    return (
        <Box
            backgroundColor='#FF3333'
            height='fit-content'
            width='100%'
            position="sticky"
            display='flex'
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
                    src={Menu}

                />
            </IconButton>
        </Box>
    )
}

export default NavBar