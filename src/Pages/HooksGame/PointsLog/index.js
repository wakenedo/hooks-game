import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'

const PointsLog = ({ points }) => {

    const [arrayOfPointsLog, setArrayOfPointsLog] = useState([])
    const [lastPoint, setLastPoint] = useState()


    useEffect(() => {
        pointsLog()
    }, [points])


    const pointsLog = () => {

        if (!points) return

        setLastPoint(points)

        let arr = [...arrayOfPointsLog]

        const pointsObject = {
            id: '',
            value: arr.length ? points - lastPoint : points
        }

        arr.push(pointsObject)

        setArrayOfPointsLog(arr)

        console.log('Arr:', arr, 'Points :', points)

    }

    return (
        <Box
            marginTop='12px'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
                height: '295px',
                maxHeight: 'fit-content',
                backgroundColor: '#B2B2B2',
                borderRadius: '5px',
            }}>
            <Typography
                fontFamily='Mouse Memoirs, sans-serif;'
                fontSize='25px'
                textAlign='center'
                margin='4px auto'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                Points Log :
                <Stack>
                    {arrayOfPointsLog.map((item) => {
                        return (
                            <Typography
                                key={item.id}
                                fontSize='28px'
                                fontFamily='Mouse Memoirs, sans-serif;'
                            >
                                {item.value}
                            </Typography>
                        )
                    })}
                </Stack>
            </Typography>
        </Box>
    )
}

export default PointsLog