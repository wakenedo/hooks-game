import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

const Timer = ({ points }) => {
  const [counter, setCounter] = useState(10.0)

  useEffect(() => {

  }, [])

  const countDown = () => {

    for (let n = 10; n <= counter; n--) {
      setCounter(n)

      return n
    }
  }

  const pointsTimer1 = points >= 1000

  if (pointsTimer1 === true) {
    return (
      <Box
        position='absolute'
        marginLeft='935px'
        marginTop='520px'
        display='flex'
        width='400px'
      >
        <Typography
          fontSize='50px'
          display='flex'
          alignItems='center'
          fontWeight='bold'
        >
          {counter >= 1000 ? countDown() : counter}
          <Typography
            fontSize='30px'
            marginLeft='10px'
            marginTop='10px'
          >
            Seconds
          </Typography>
        </Typography>
      </Box>
    )

  }



}

export default Timer