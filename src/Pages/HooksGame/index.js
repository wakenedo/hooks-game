import React, { useEffect, useState } from 'react'
import Ball from '../../assets/svg/basketball-svgrepo-com.svg'

const HooksGame = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [marginTop, setMarginTop] = useState('298px')
    const [points, setPoints] = useState(0)
    const [array, setArray] = useState([])
    const [arrayOfPointsLog, setArrayOfPointsLog] = useState([])

    const blue = '#3388ff'
    const red = '#ff3333'
    const yellow = '#ffeb33'

    const regularCombo1 = [yellow, blue, red]
    const regularCombo2 = [red, blue, yellow]
    const weirdCombo1 = [blue, yellow, red]
    const weirdCombo2 = [blue, red, yellow]
    const weakCombo1 = [red, yellow, blue]
    const weakCombo2 = [yellow, red, blue]
    const weakestCombo1 = [blue, red, blue]
    const weakestCombo2 = [yellow, blue, yellow]
    const whackCombo1 = [red, blue, red]
    const whackCombo2 = [red, yellow, red]
    const _superCombo1 = [blue, yellow, blue, red]
    const _superWhack1 = [blue, yellow, blue, yellow]


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
            setMarginTop('298px')
        } if (marginTop !== '288px') {
            setMarginTop('288px')

        }
        return marginTop
    }


    const superWhackCombo = () => {
        for (var i = 0; i < _superWhack1.length; i++) {

            // console.log(i, _superWhack1[i])
        }
        for (var i = 0; i < array.length; i++) {

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

    }
    superWhackCombo()
    const whackCombo = () => {
        for (var i = 0; i < whackCombo1.length; i++) {

            // console.log(i, whackCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
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

    }
    whackCombo()
    const weakestCombo = () => {
        for (var i = 0; i < weakestCombo1.length; i++) {

            // console.log(i, weakestCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
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

    }
    weakestCombo()
    const weakCombo = () => {
        for (var i = 0; i < weakCombo1.length; i++) {

            // console.log(i, weakCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
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

    }
    weakCombo()

    const weirdCombo = () => {
        for (var i = 0; i < weirdCombo1.length; i++) {

            // console.log(i, weirdCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
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

    }
    weirdCombo()
    const regularCombo = () => {
        for (var i = 0; i < regularCombo1.length; i++) {

            // console.log(i, regularCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
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

    }
    regularCombo()
    const superCombo = () => {
        for (var i = 0; i < _superCombo1.length; i++) {

            // console.log(i, _superCombo[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
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

    }
    superCombo()

    const superWhackPoints = () => {

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
    }
    const whackPoints = () => {

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
    }
    const weakestPoints = () => {

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
    }
    const weakPoints = () => {

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
    }
    const weirdPoints = () => {

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
    }
    const regularPoints = () => {

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
    }
    const superPoints = () => {

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
    }

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

    // Iterating on Whack Points
    useEffect(() => {
        whackPoints()
    }, [backgroundColor])
    // Iterating on Weak Points
    useEffect(() => {
        weakPoints()
    }, [backgroundColor])
    // Iterating on Weakest Points
    useEffect(() => {
        weakestPoints()
    }, [backgroundColor])
    // Iterating on Weird Points
    useEffect(() => {
        weirdPoints()
    }, [backgroundColor])
    // Iterating on Regular Points
    useEffect(() => {
        regularPoints()
    }, [backgroundColor])
    // Iterating on Super Points
    useEffect(() => {
        superPoints()
    }, [backgroundColor])
    // Iterating on superWhack Points
    useEffect(() => {
        superWhackPoints()
    }, [backgroundColor])


    //setting Array state for combo matching
    useEffect(() => {
        array.push(backgroundColor)
        setArray(array)

    }, [backgroundColor])

    console.log('Points log:', points)
    console.log('Array log:', array.length, array)
    console.log('Change background-color log:', backgroundColor,)
    console.log('pointsLog log:', pointsLog(),)

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '1200px',
                    height: '600px',
                    maxHeight: 'fit-content',
                    backgroundColor: `${backgroundColor}`,
                    margin: 'auto'

                }}
            >
                <h1>
                    Drop the ball - beta

                </h1>

                <button onClick={() => backgroundColorYellow(marginTopLow())}>Yellow!</button>
                <button onClick={() => backgroundColorBlue(marginTopMid())}>Blue!</button>
                <button onClick={() => backgroundColorRed(marginTopHigh())}>Red!</button>
                <div
                    width="100%"
                    height='100%'


                >

                    <img
                        style={{
                            marginTop: `${marginTop}`,
                            transition: '0.2 ease-in-out',
                        }}
                        src={Ball}
                        width={150}
                        alt='ball'
                    />

                </div>
            </div>
            <h4>Points : {points}</h4>
            <h6>Background Color : {backgroundColor}</h6>
            
            
            <div
            style={{
                display: 'flex',
                

            }}
            >

            
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
                    height: '250px',
                    maxHeight: 'fit-content',
                    backgroundColor: '#414141',
                    marginLeft: 'auto',
                    marginRight: '2px',
                    borderRadius: '5px',


                }}>
                <h6
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    Combo Logs:
                    
                    <p>
                        {pointsLog()}
                    </p>

                </h6>

            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
                    height: '250px',
                    maxHeight: 'fit-content',
                    backgroundColor: '#B2B2B2',
                    marginRight: 'auto',
                    marginLeft: '2px',
                    borderRadius: '5px',


                }}>
                <h6
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    Points Log:
                    
                    <p>
                        {pointsLog()}
                    </p>

                </h6>

            </div>
            </div>
        </>
    )
}

export default HooksGame