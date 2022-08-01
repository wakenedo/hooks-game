import React, { useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'

const PointsLog = ({ points }) => {

    const [arrayOfPointsLog, setArrayOfPointsLog] = useState([])

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

    console.log('pointsLog log:', pointsLog(),)
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
                textAlign='center'
                margin='4px auto'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                Points Log:
                <Stack>
                    {pointsLog((point) => {
                        <Typography>{point}</Typography>
                    })}
                </Stack>
            </Typography>
        </Box>
    )
}

export default PointsLog