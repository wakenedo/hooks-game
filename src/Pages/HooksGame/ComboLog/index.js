import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

const ComboLog = ({ array }) => {

    const [arrayOfCombosLog, setArrayOfCombosLog] = useState([])
    const [lastCombo, setLastCombo] = useState()

    useEffect(() => {
        combosLog()
    }, [array])

    const combosLog = () => {
        if (!array) return

        setLastCombo(array)

        let arr = [...arrayOfCombosLog]

        const combosObject = {
            id: '',
            value: arr.length ? array - lastCombo : array
        }

        arr.push(combosObject)

        setArrayOfCombosLog(arr)

        console.log('ComboArr:', arr, 'Array:', array)

    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '200px',
                height: '295px',
                maxHeight: 'fit-content',
                backgroundColor: '#414141',
                borderRadius: '5px',
            }}>
            <Typography
                fontFamily='Mouse Memoirs, sans-serif;'
                fontSize='25px'
                textAlign='center'
                margin='4px auto'
                color='#fff'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                Combo Logs :
                <Typography
                    fontSize='20px'
                    fontFamily='Mouse Memoirs, sans-serif;'
                    color='#fff'
                >
                    {arrayOfCombosLog.map((item) => {
                        return (
                            <Typography
                                key={item.id}
                                fontSize='25px'
                                fontFamily='Mouse Memoirs, sans-serif;'

                            >
                                {item.value}
                            </Typography>
                        )
                    })}
                </Typography>
            </Typography>
        </Box>
    )
}

export default ComboLog