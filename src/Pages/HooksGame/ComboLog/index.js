import React, { useEffect, useState } from 'react'
import { Box, Table, TableContainer, Typography } from '@mui/material'



const ComboLog = ({ array }) => {

    const [arrayOfCombosLog, setArrayOfCombosLog] = useState([])
    const [lastCombo, setLastCombo] = useState('')

    useEffect(() => {
        combosLog()
    }, [array])

    const combosLog = () => {
        if (!array) return

        setLastCombo(array)

        let arr = [...arrayOfCombosLog]

        const combosObject = {
            id: 1,
            value: arrayOfCombosLog.length ? array - lastCombo : array
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
            <TableContainer>
                <Table>
                    <Typography
                        fontFamily='Mouse Memoirs, sans-serif;'
                        fontSize='25px'
                        textAlign='center'
                        margin='auto'
                        color='#fff'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            backgroundColor='#414141'
                            height='35px'
                            sx={{
                                position: 'sticky',
                                top: '0',
                            }}
                        >
                            Combos Log :
                        </Box>

                        {arrayOfCombosLog.map((item) => {
                            return (
                                <Typography
                                    key={item.id}
                                    fontSize='25px'
                                    fontFamily='Mouse Memoirs, sans-serif;'
                                    color='#fff'
                                    display='flex'
                                    flexDirection='column'

                                >
                                    {item.value}
                                </Typography>
                            )
                        })}
                    </Typography>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default ComboLog