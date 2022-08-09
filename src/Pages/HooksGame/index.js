import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'

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

const HooksGame = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [points, setPoints] = useState(0)
    const [array, setArray] = useState([])

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const blue = '#3388ff'
    const red = '#ff3333'
    const yellow = '#ffeb33'

    const regularCombo1 = useMemo(() => [yellow, blue, red], [])
    const regularCombo2 = useMemo(() => [red, blue, yellow], [])
    const weirdCombo1 = useMemo(() => [blue, yellow, red], [])
    const weirdCombo2 = useMemo(() => [blue, red, yellow], [])
    const weakCombo1 = useMemo(() => [red, yellow, blue], [])
    const weakCombo2 = useMemo(() => [yellow, red, blue], [])
    const weakestCombo1 = useMemo(() => [blue, red, blue], [])
    const weakestCombo2 = useMemo(() => [yellow, blue, yellow], [])
    const whackCombo1 = useMemo(() => [red, blue, red], [])
    const whackCombo2 = useMemo(() => [red, yellow, red], [])
    const _superCombo1 = useMemo(() => [blue, yellow, blue, red], [])
    const _superWhack1 = useMemo(() => [blue, yellow, blue, yellow], [])


    console.log('Background log:', backgroundColor)

    const backgroundColorYellow = () => {

        if (backgroundColor === '#ffeb33') {
            alert('You dropped the ball 🏀 !', backgroundColor)
            setPoints(0)
            setArray([])
            return points
        } if (backgroundColor !== '#ffeb33') {
            setBackgroundColor('#ffeb33')
        }

        return backgroundColor
    }
    const backgroundColorBlue = () => {

        if (backgroundColor === '#3388ff') {
            alert('You dropped the ball 🏀 !', backgroundColor,)
            setPoints(0)
            setArray([])
            return points
        } if (backgroundColor !== '#3388ff') {
            setBackgroundColor('#3388ff')

        }

        return backgroundColor
    }
    const backgroundColorRed = () => {

        if (backgroundColor === '#ff3333') {
            alert(' You dropped the ball 🏀 !', backgroundColor)
            setPoints(0)
            setArray([])
            return points
        } if (backgroundColor !== '#ff3333') {
            setBackgroundColor('#ff3333')

        }

        return backgroundColor
    }

    const superWhackCombo = useCallback(() => {
        if (array[0] === _superWhack1[0]) {
            if (array[1] === _superWhack1[1]) {
                if (array[2] === _superWhack1[2]) {
                    if (array[3] === _superWhack1[3]) {
                        if (points <= 0) {
                            setArray([])
                            setPoints(0)
                            console.log('_superWhack1',)
                        }
                        return true
                    }

                }

            }

        }


        console.log('super whack test', array, _superWhack1)
        return false


    }, [_superWhack1, array, points])
    superWhackCombo()

    const whackCombo = useCallback(() => {
        if (array[0] === whackCombo1[0]) {
            if (array[1] === whackCombo1[1]) {
                if (array[2] === whackCombo1[2]) {
                    setArray([])
                    console.log('whackCombo1',)
                }
                return true
            }
        }
        if (array[0] === whackCombo2[0]) {
            if (array[1] === whackCombo2[1]) {
                if (array[2] === whackCombo2[2]) {
                    setArray([])
                    console.log('whackCombo2',)
                }
                return true
            }

        }

        console.log('whack test', array, whackCombo1)
        return false


    }, [whackCombo1, whackCombo2, array])
    whackCombo()

    const weakestCombo = useCallback(() => {
        if (array[0] === weakestCombo1[0]) {
            if (array[1] === weakestCombo1[1]) {
                if (array[2] === weakestCombo1[2]) {
                    setArray([])
                    console.log('weakestCombo1',)
                }
                return true
            }
        }
        if (array[0] === weakestCombo2[0]) {
            if (array[1] === weakestCombo2[1]) {
                if (array[2] === weakestCombo2[2]) {
                    setArray([])
                    console.log('weakestCombo2',)
                }
                return true
            }

        }

        console.log('weak test', array, weakestCombo1)
        return false


    }, [weakestCombo1, weakestCombo2, array])
    weakestCombo()

    const weakCombo = useCallback(() => {
        if (array[0] === weakCombo1[0]) {
            if (array[1] === weakCombo1[1]) {
                if (array[2] === weakCombo1[2]) {
                    setArray([])
                    console.log('weakCombo1',)
                }
                return true
            }
        }
        if (array[0] === weakCombo2[0]) {
            if (array[1] === weakCombo2[1]) {
                if (array[2] === weakCombo2[2]) {
                    setArray([])
                    console.log('weakCombo2',)
                }
                return true
            }

        }

        console.log('weak test', array, weakCombo1)
        return false

    }, [weakCombo1, weakCombo2, array])
    weakCombo()

    const weirdCombo = useCallback(() => {
        if (array[0] === weirdCombo1[0]) {
            if (array[1] === weirdCombo1[1]) {
                if (array[2] === weirdCombo1[2]) {
                    setArray([])
                    console.log('weirdCombo1')
                }
                return true
            }
        }
        if (array[0] === weirdCombo2[0]) {
            if (array[1] === weirdCombo2[1]) {
                if (array[2] === weirdCombo2[2]) {
                    setArray([])

                    console.log('weirdCombo2',)
                }
                return true
            }

        }


        console.log('weirdCombo test', array, weirdCombo1)
        return false

    }, [weirdCombo1, weirdCombo2, array])


    const regularCombo = useCallback(() => {
        if (array[0] === regularCombo1[0]) {
            if (array[1] === regularCombo1[1]) {
                if (array[2] === regularCombo1[2]) {
                    setArray([])
                    console.log('regularCombo1')
                }
                return true
            }
        }
        if (array[0] === regularCombo2[0]) {
            if (array[1] === regularCombo2[1]) {
                if (array[2] === regularCombo2[2]) {
                    setArray([])

                    console.log('regularCombo2',)
                }
                return true
            }

        }
        console.log('regular test', array, regularCombo1)
        return false
    }, [regularCombo1, regularCombo2, array])
    regularCombo()

    const superCombo = useCallback(() => {
        if (array[0] === _superCombo1[0]) {
            if (array[1] === _superCombo1[1]) {
                if (array[2] === _superCombo1[2]) {
                    if (array[3] === _superCombo1[3]) {
                        setArray([])
                        console.log('_superCombo',)

                        return true
                    }
                }
            }
        }

        console.log(' super combo test', array, _superCombo1)
        return false

    }, [_superCombo1, array])
    superCombo()

    // const superWhackPoints = useCallback(() => {
    //     if (superWhackCombo(true)) {
    //         var addPoints = points - 4
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             if (points < 0) {
    //                 setPoints(0)
    //             }
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, superWhackCombo])

    // const whackPoints = useCallback(() => {
    //     if (whackCombo(true)) {
    //         var addPoints = points + 0
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, whackCombo])

    // const weakestPoints = useCallback(() => {
    //     if (weakestCombo(true)) {
    //         var addPoints = points + 1
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, weakestCombo])

    // const weakPoints = useCallback(() => {
    //     if (weakCombo(true)) {
    //         var addPoints = points + 2
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, weakCombo])

    // const weirdPoints = useCallback(() => {
    //     if (weirdCombo(true)) {
    //         var addPoints = points + 2
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, weirdCombo])

    // const regularPoints = useCallback(() => {
    //     if (regularCombo(true)) {
    //         var addPoints = points + 3
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, regularCombo])

    // const superPoints = useCallback(() => {
    //     if (superCombo(true)) {
    //         var addPoints = points + 6
    //         var pointsAdded = addPoints
    //         var verification2 = points !== 0
    //         var verification3 = points !== pointsAdded


    //         console.log('pointsAdded log:', pointsAdded,)
    //         console.log('addPoints log:', addPoints,)
    //         console.log('points log:', points)

    //         console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


    //         if (verification2) {
    //             const points = pointsAdded
    //             setPoints(points)
    //             return points
    //         }
    //         setPoints(addPoints)


    //         if (verification3) {
    //             return pointsAdded
    //         }
    //         return points
    //     }
    // }, [points, superCombo])

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
        whackCombo,
        regularCombo,
        weakCombo,
        weakestCombo,
        weirdCombo,
        superCombo,
        superWhackCombo
    ])

    //setting Array state for combo matching
    useEffect(() => {
        array.push(backgroundColor)
        setArray(array)
    }, [backgroundColor, setArray])

    console.log('Points log:', points)
    console.log('Array log:', array.length, array)
    console.log('Change background-color log:', backgroundColor,)

    return (
        <Box
            justifyContent='center'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Game
                backgroundColor={backgroundColor}
                backgroundColorYellow={backgroundColorYellow}
                backgroundColorBlue={backgroundColorBlue}
                backgroundColorRed={backgroundColorRed}
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