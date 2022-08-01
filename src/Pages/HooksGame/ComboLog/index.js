import React from 'react'
import { Box, Typography } from '@mui/material'

const ComboLog = () => {

    //How to do it 
    const combosLog = () => {


    }
    combosLog()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
                height: '295px',
                maxHeight: 'fit-content',
                backgroundColor: '#414141',
                borderRadius: '5px',
            }}>
            <Typography
                fontFamily='Mouse Memoirs, sans-serif;'
                fontSize='25px'
                textAlign='center'
                margin='4px auto'
                color='#fff'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                Combo Logs :
                <Typography
                    fontSize='20px'
                    fontFamily='Mouse Memoirs, sans-serif;'
                    color='#fff'>
                    teste
                </Typography>
            </Typography>
        </Box>
    )
}

export default ComboLog