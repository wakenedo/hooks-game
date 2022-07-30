import React from 'react'
import { Box, Button } from '@mui/material'

//Inner Component
import Title from './Title'
import Ball from './Ball'

const Game = ({
    backgroundColor,
    marginTop,
    marginTopHigh,
    marginTopMid,
    marginTopLow,
    backgroundColorYellow,
    backgroundColorRed,
    backgroundColorBlue }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '1200px',
                    height: '600px',
                    maxHeight: 'fit-content',
                    backgroundColor: `${backgroundColor}`,
                    margin: '20px auto'

                }}
            >
                <Title />
                <Button
                    onClick={() => backgroundColorYellow(marginTopLow())}
                    sx={{
                        color: '#000000',
                        height: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    Yellow !
                </Button>
                <Button
                    onClick={() => backgroundColorBlue(marginTopMid())}
                    sx={{
                        color: '#000000',
                        height: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    Blue !
                </Button>
                <Button
                    onClick={() => backgroundColorRed(marginTopHigh())}
                    sx={{
                        color: '#000000',
                        height: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    Red !
                </Button>
                <Box
                    width="100%"
                    height='100%'
                >
                </Box>
                <Ball marginTop={marginTop} />
            </Box>
        </Box>
    )
}

export default Game