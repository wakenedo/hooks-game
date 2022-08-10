import React, { useEffect, useState } from 'react'
import { Box, Typography, TableContainer, Table } from '@mui/material'

const PointsLog = ({ points }) => {

    const [arrayOfPointsLog, setArrayOfPointsLog] = useState([])
    const [lastPoint, setLastPoint] = useState()


    useEffect(() => {
        pointsLog()
    }, [points,])


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
                height: '295px',
                maxHeight: 'fit-content',
                backgroundColor: '#B2B2B2',
                borderRadius: '5px',
            }}
        >
            <TableContainer>
                <Table>
                    <Typography
                        fontFamily='Mouse Memoirs, sans-serif;'
                        fontSize='25px'
                        textAlign='center'
                        margin='auto'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}
                    >
                        <Box
                            backgroundColor='#B2B2B2'
                            height='35px'
                            sx={{
                                position: 'sticky',
                                top: '0',
                            }}
                        >
                            Points Log :
                        </Box>

                        {arrayOfPointsLog.map((item) => {
                            return (
                                <Typography
                                    key={item.id}
                                    fontSize='28px'
                                    fontFamily='Mouse Memoirs, sans-serif;'
                                >
                                    {item.value >= 0 ? item.value : null}
                                </Typography>
                            )
                        })}

                    </Typography>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default PointsLog