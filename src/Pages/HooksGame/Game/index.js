import React, { useState } from 'react'
import { Box, Button } from '@mui/material'

//Inner Component
import Title from './Title'
import Ball from './Ball'

const Game = ({
    backgroundColor,
    backgroundColorYellow,
    backgroundColorRed,
    backgroundColorBlue,
    points,
}) => {
    const [marginTop, setMarginTop] = useState('320px')
    const marginTopLow = () => {
        if (backgroundColor === '#ffeb33') {
            setMarginTop('18px')
        } if (marginTop !== '18px') {
            setMarginTop('18px')

        }
        return marginTop
    }
    const marginTopMid = () => {
        if (backgroundColor === '#3388ff') {
            setMarginTop('128px')
        } if (marginTop !== '108px') {
            setMarginTop('128px')

        }
        return marginTop
    }
    const marginTopHigh = () => {
        if (backgroundColor === '#ff3333') {
            setMarginTop('320px')
        } if (marginTop !== '320px') {
            setMarginTop('320px')

        }
        return marginTop
    }
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
                <Box>
                </Box>
                <Ball marginTop={marginTop} />
            </Box>
        </Box>
    )
}

export default Game