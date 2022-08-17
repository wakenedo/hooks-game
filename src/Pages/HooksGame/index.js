import React, { useCallback, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Combos } from '../../utils/combos'

import {
    superWhackPoints,
    whackPoints,
    weakestPoints,
    weakPoints,
    weirdPoints,
    regularPoints,
    superPoints
} from './Game/Points'

//Components
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

//InnerComponents
import PointsLog from './PointsLog'
import ComboLog from './ComboLog'
import Score from './Score'
import Game from './Game'
import { backgroundColorBlue, backgroundColorRed, backgroundColorYellow } from '../../utils/backgroundColor'

const HooksGame = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [array, setArray] = useState([])
    const [verificationArray, setVerificationArray] = useState([])
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [points, setPoints] = useState(0)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // console.log('Background log:', backgroundColor)

    const superWhackCombo = useCallback(() => {
        if (array[0] === Combos._superWhack1[0]) {
            if (array[1] === Combos._superWhack1[1]) {
                if (array[2] === Combos._superWhack1[2]) {
                    if (array[3] === Combos._superWhack1[3]) {
                        if (points <= 0) {
                            setArray([])
                            setPoints(0)
                            // console.log('_superWhack1',)
                        }
                        return true
                    }

                }

            }

        }


        // console.log('super whack test', array, _superWhack1)
        return false


    }, [array, points])


    const whackCombo = useCallback(() => {
        if (array[0] === Combos.whackCombo1[0]) {
            if (array[1] === Combos.whackCombo1[1]) {
                if (array[2] === Combos.whackCombo1[2]) {
                    setArray([])
                    // console.log('whackCombo1',)
                    return true
                }
            }
        }
        if (array[0] === Combos.whackCombo2[0]) {
            if (array[1] === Combos.whackCombo2[1]) {
                if (array[2] === Combos.whackCombo2[2]) {
                    setArray([])
                    // console.log('whackCombo2',)
                    return true
                }
            }

        }

        // console.log('whack test', array, whackCombo1)
        return false


    }, [array])


    const weakestCombo = useCallback(() => {
        if (array[0] === Combos.weakestCombo1[0]) {
            if (array[1] === Combos.weakestCombo1[1]) {
                if (array[2] === Combos.weakestCombo1[2]) {
                    setArray([])
                    // console.log('weakestCombo1',)
                    return true
                }
            }
        }
        if (array[0] === Combos.weakestCombo2[0]) {
            if (array[1] === Combos.weakestCombo2[1]) {
                if (array[2] === Combos.weakestCombo2[2]) {
                    setArray([])
                    // console.log('weakestCombo2',)
                    return true
                }
            }

        }

        // console.log('weak test', array, weakestCombo1)
        return false


    }, [array])


    const weakCombo = useCallback(() => {
        if (array[0] === Combos.weakCombo1[0]) {
            if (array[1] === Combos.weakCombo1[1]) {
                if (array[2] === Combos.weakCombo1[2]) {
                    setArray([])
                    // console.log('weakCombo1',)
                    return true
                }
            }
        }
        if (array[0] === Combos.weakCombo2[0]) {
            if (array[1] === Combos.weakCombo2[1]) {
                if (array[2] === Combos.weakCombo2[2]) {
                    setArray([])
                    // console.log('weakCombo2',)
                    return true
                }
            }

        }

        // console.log('weak test', array, weakCombo1)
        return false

    }, [array])


    const weirdCombo = useCallback(() => {
        if (array[0] === Combos.weirdCombo1[0]) {
            if (array[1] === Combos.weirdCombo1[1]) {
                if (array[2] === Combos.weirdCombo1[2]) {
                    setArray([])
                    console.log('weirdCombo1')
                    return true
                }
            }
        }
        if (array[0] === Combos.weirdCombo2[0]) {
            if (array[1] === Combos.weirdCombo2[1]) {
                if (array[2] === Combos.weirdCombo2[2]) {
                    setArray([])

                    console.log('weirdCombo2',)
                    return true
                }
            }

        }
        console.log('weirdCombo test', array)
        return false

    }, [array])


    const regularCombo = useCallback(() => {
        if (array[0] === Combos.regularCombo1[0]) {
            if (array[1] === Combos.regularCombo1[1]) {
                if (array[2] === Combos.regularCombo1[2]) {
                    setArray([])
                    // console.log('regularCombo1')
                    return true
                }
            }
        }
        if (array[0] === Combos.regularCombo2[0]) {
            if (array[1] === Combos.regularCombo2[1]) {
                if (array[2] === Combos.regularCombo2[2]) {
                    setArray([])
                    // console.log('regularCombo2',)
                    return true
                }
            }

        }
        // console.log('regular test', array, regularCombo1)
        return false
    }, [array])
    regularCombo()

    const superCombo = useCallback(() => {
        if (array[0] === Combos._superCombo1[0]) {
            if (array[1] === Combos._superCombo1[1]) {
                if (array[2] === Combos._superCombo1[2]) {
                    if (array[3] === Combos._superCombo1[3]) {
                        setArray([])
                        // console.log('_superCombo',)
                        return true
                    }
                }
            }
        }
        // console.log(' super combo test', array, _superCombo1)
        return false

    }, [array])


    //Iterating over different types of points
    useEffect(() => {
        whackPoints(points, setPoints, whackCombo)
        weakestPoints(points, setPoints, weakestCombo)
        weakPoints(points, setPoints, weakCombo)
        weirdPoints(points, setPoints, weirdCombo)
        regularPoints(points, setPoints, regularCombo)
        superPoints(points, setPoints, superCombo)
        superWhackPoints(points, superWhackCombo, setPoints)

    }, [
        backgroundColor,
        points,
        superWhackCombo,
        whackCombo,
        weakCombo,
        weirdCombo,
        regularCombo,
        weakestCombo,
        superCombo,
    ])

    //setting Array state for combo matching
    useEffect(() => {
        if (array === verificationArray) {
            setArray([])
            setVerificationArray([])
            setPoints(points)
        } else return
    }, [])

    // console.log('Points log:', points)
    // console.log('Array log:', array.length, array)
    // console.log('Change background-color log:', backgroundColor,)

    return (
        <Box
            justifyContent='center'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Game
                backgroundColor={backgroundColor}
                backgroundColorYellow={() => backgroundColorYellow(backgroundColor, points, setBackgroundColor,
                    array, verificationArray, setArray, setPoints)}
                backgroundColorBlue={() => backgroundColorBlue(backgroundColor, points, setBackgroundColor,
                    array, verificationArray, setArray, setPoints)}
                backgroundColorRed={() => backgroundColorRed(backgroundColor, points, setBackgroundColor,
                    array, verificationArray, setArray, setPoints)}
                points={points}
            />
            <Score points={points} />
            <Box
                position="absolute"
                top='0'
                marginLeft='150px'
                marginTop='60px'
            >
                <Stack
                    direction='column'
                >
                    <ComboLog array={array} />
                    <PointsLog points={points} />
                </Stack>
            </Box>

        </Box>
    )
}

export default HooksGame