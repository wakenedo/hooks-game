import React, { useState } from 'react'
import { Box, Checkbox, Typography } from '@mui/material'

const GameSettingsMenu = () => {
  const [hideBgColor, setHideBgColor] = useState(false)


  return (
    <Box
      width='190px'
      marginTop='10px'
      padding='20px'
      height='fit-content'
      position='absolute'
      zIndex='999'
      backgroundColor='#D9D9D9'
    >
      <Typography
        color='#5A3392'
        textTransform='uppercase'
      >
        Settings :
      </Typography>
      <Box
        display='flex'
        alignItems='center'
      >
        <Typography
          fontSize='11px'
          color='#5A3392'
        >
          Disable Background Color :
        </Typography>
        <Checkbox

        />
      </Box>
    </Box>
  )
}

export default GameSettingsMenu