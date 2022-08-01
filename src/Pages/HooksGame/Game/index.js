import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'

import GameBackground from '../../../assets/Game/GameBackground.png'

//Inner Component
import Title from './Title'
import Ball from './Ball'
import GameMusic from './GameMusic'
import GameSettings from './GameSettings'


const Game = ({
    backgroundColor,
    backgroundColorYellow,
    backgroundColorRed,
    backgroundColorBlue,
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
    console.log('Margin log', marginTop,)
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
                    backgroundImage: `url(${GameBackground})`,
                    margin: '20px auto',
                    borderRadius: '10px'
                }}
            >
                <Box
                    display='flex'
                    alignItems='center'
                    width='1200px'
                >
                    <Box
                        marginLeft='400px'
                    >
                        <Title />
                    </Box>
                    <Box
                        marginLeft='250px'
                        display='flex'
                        alignItems='center'
                    >
                        <GameSettings />
                        <GameMusic />

                    </Box>
                </Box>

                <Button

                    onClick={() => backgroundColorYellow(marginTopLow())}
                    sx={{
                        color: '#000000',
                        height: '20px',
                        fontWeight: 'bold'
                    }}
                >

                    <Typography
                        fontFamily='Mouse Memoirs, sans-serif;'
                        fontSize='21px'
                    >
                        Top !
                    </Typography>

                </Button>
                <Button
                    onClick={() => backgroundColorBlue(marginTopMid())}
                    sx={{
                        color: '#000000',
                        height: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    <Typography
                        fontFamily='Mouse Memoirs, sans-serif;'
                        fontSize='21px'
                    >

                        Mid !
                    </Typography>
                </Button>
                <Button
                    onClick={() => backgroundColorRed(marginTopHigh())}
                    sx={{
                        color: '#000000',
                        height: '20px',
                        fontWeight: 'bold'
                    }}
                >
                    <Typography
                        fontFamily='Mouse Memoirs, sans-serif;'
                        fontSize='21px'
                    >

                        Bottom !
                    </Typography>
                </Button>
                <Box>
                </Box>
                <Ball marginTop={marginTop} />
            </Box>
        </Box>
    )
}

export default Game