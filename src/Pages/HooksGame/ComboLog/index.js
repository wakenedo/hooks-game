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
                textAlign='center'
                margin='4px auto'
                color='#fff'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                Combo Logs:
                <Typography
                    color='#fff'>
                    teste
                </Typography>
            </Typography>
        </Box>
    )
}

export default ComboLog