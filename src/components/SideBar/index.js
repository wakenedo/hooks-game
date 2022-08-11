import React from 'react'

//MaterialUi
import { Stack, Box, Typography } from '@mui/material'

//Inner Components
import SideBarItems from './SideBarItems'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <Stack
            isOpen={isOpen}
            toggle={toggle}
            sx={{
                position: 'fixed',
                borderTopLeftRadius: '25px',
                zIndex: 999,
                width: '300px',
                height: '95%',
                background: '#F5F5F5',
                borderLeft: '1px solid #282C34',
                borderTop: '1px solid #282C34',
                alignItems: 'center',
                bottom: '0',
                transition: '0.75s ease-in-out',
                right: isOpen ? '0' : '-1000px'
            }}
        >
            <Box

                width={265}
                margin='auto'
                display='flex'
                flexDirection='column'
                alignItems='center'


            >
                <SideBarItems />

            </Box>
            <Box
                textAlign='center'
            >
                <Typography>
                    All rights reserved to @wakenedo
                </Typography>
            </Box>
        </Stack>
    )
}

export default SideBar