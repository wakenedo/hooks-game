import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'

//Components
import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'

//InnerComponents
import PointsLog from './PointsLog'
import ComboLog from './ComboLog'
import Score from './Score'
import Game from './Game'

const HooksGame = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [marginTop, setMarginTop] = useState('320px')
    const [points, setPoints] = useState(0)
    const [array, setArray] = useState([])
    const [arrayOfPointsLog, setArrayOfPointsLog] = useState([])
    //const [arrayOfCombosLog, setArrayOfCombosLog] = useState([''])



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
    console.log('Margin log', marginTop,)

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
            setMarginTop('108px')
        } if (marginTop !== '108px') {
            setMarginTop('108px')

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


    const superWhackCombo = useCallback(() => {
        for (var x = 0; x < _superWhack1.length; x++) {

            // console.log(x, _superWhack1[x])
        }
        for (var x1 = 0; x1 < array.length; x1++) {

            // console.log(i, array[i],)
        }

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
        for (var y = 0; y < whackCombo1.length; y++) {

            // console.log(y, whackCombo1[y])
        }
        for (var y1 = 0; y1 < array.length; y1++) {

            // console.log(y1, array[y1],)
        }


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
        for (var z = 0; z < weakestCombo1.length; z++) {

            // console.log(z, weakestCombo1[z])
        }
        for (var z1 = 0; z1 < array.length; z1++) {

            // console.log(z1, array[z1],)
        }


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
        for (var w = 0; w < weakCombo1.length; w++) {

            // console.log(w, weakCombo1[w])
        }
        for (var w1 = 0; w1 < array.length; w1++) {

            // console.log(w1, array[w1],)
        }


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
        for (var u = 0; u < weirdCombo1.length; u++) {

            // console.log(i, weirdCombo1[i])
        }
        for (var u1 = 0; u1 < array.length; u1++) {

            // console.log(u1, array[u1],)
        }

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


        console.log('regular test', array, weirdCombo1)
        return false

    }, [weirdCombo1, weirdCombo2, array])
    weirdCombo()

    const regularCombo = useCallback(() => {
        for (var p = 0; p < regularCombo1.length; p++) {

            // console.log(p, regularCombo1[p])
        }
        for (var p1 = 0; p1 < array.length; p1++) {

            // console.log(p1, array[p1],)
        }

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
        for (var f = 0; f < _superCombo1.length; f++) {

            // console.log(f, _superCombo[f])
        }
        for (var f1 = 0; f1 < array.length; f1++) {

            // console.log(f1, array[f1],)
        }


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

    const superWhackPoints = useCallback(() => {
        if (superWhackCombo(true)) {
            var addPoints = points - 4
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                if (points < 0) {
                    setPoints(0)
                }
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, superWhackCombo])

    const whackPoints = useCallback(() => {
        if (whackCombo(true)) {
            var addPoints = points + 0
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, whackCombo])

    const weakestPoints = useCallback(() => {
        if (weakestCombo(true)) {
            var addPoints = points + 1
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, weakestCombo])

    const weakPoints = useCallback(() => {
        if (weakCombo(true)) {
            var addPoints = points + 2
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, weakCombo])

    const weirdPoints = useCallback(() => {
        if (weirdCombo(true)) {
            var addPoints = points + 2
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, weirdCombo])

    const regularPoints = useCallback(() => {
        if (regularCombo(true)) {
            var addPoints = points + 3
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, regularCombo])

    const superPoints = useCallback(() => {
        if (superCombo(true)) {
            var addPoints = points + 6
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }, [points, superCombo])




    const pointsLog = () => {
        let arr = arrayOfPointsLog
        for (let i = 0; i <= points; i++) {
            if (i !== points) {
                return points
            }

            arr.map((point) => {
                return point
            })
            arr.push(points.toString())


            return arr[i]
        }
    }
    pointsLog()

    //How to do it 
    const combosLog = () => {


    }
    combosLog()

    //How to do it 
    {/*const combosLog = () => {
        let arr = arrayOfCombosLog
        for (let i = 0; i <= combos; i++) {
            if (i !== combos) {
                return combos
            }

            arr.map((point) => {
                return point
            })
            arr.push(combos.toString())


            return arr[i]
        }
    }
combosLog()*/}

    // Iterating on Whack Points
    useEffect(() => {
        whackPoints()
    }, [backgroundColor, whackPoints])
    // Iterating on Weak Points
    useEffect(() => {
        weakPoints()
    }, [backgroundColor, weakPoints])
    // Iterating on Weakest Points
    useEffect(() => {
        weakestPoints()
    }, [backgroundColor, weakestPoints])
    // Iterating on Weird Points
    useEffect(() => {
        weirdPoints()
    }, [backgroundColor, weirdPoints])
    // Iterating on Regular Points
    useEffect(() => {
        regularPoints()
    }, [backgroundColor, regularPoints])
    // Iterating on Super Points
    useEffect(() => {
        superPoints()
    }, [backgroundColor, superPoints])
    // Iterating on superWhack Points
    useEffect(() => {
        superWhackPoints()
    }, [backgroundColor, superWhackPoints])


    //setting Array state for combo matching
    useEffect(() => {
        array.push(backgroundColor)
        setArray(array)
        //setArray( arr => [...arr, `${backgroundColor}`]);

    }, [backgroundColor])

    console.log('Points log:', points)
    console.log('Array log:', array.length, array)
    console.log('Change background-color log:', backgroundColor,)
    console.log('pointsLog log:', pointsLog(),)


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <Box
            justifyContent='center'
        >
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Game
                backgroundColor={backgroundColor}
                marginTop={marginTop}
                backgroundColorYellow={backgroundColorYellow}
                backgroundColorBlue={backgroundColorBlue}
                backgroundColorRed={backgroundColorRed}
                marginTopHigh={marginTopHigh}
                marginTopMid={marginTopMid}
                marginTopLow={marginTopLow}
            />
            <Score points={points} />
            <Typography
                variant='h6'
                textAlign="center"
            >
                Background Color : {backgroundColor}
            </Typography>
            <Box
                position="absolute"
                top='0'
                marginLeft='150px'
                marginTop='60px'
            >
                <Stack
                    direction='column'
                >
                    <ComboLog />
                    <PointsLog pointsLog={pointsLog} />
                </Stack>
            </Box>

        </Box>
    )
}

export default HooksGame