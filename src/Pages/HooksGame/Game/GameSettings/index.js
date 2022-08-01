import React, { useState } from 'react'
import { Box, Button } from '@mui/material'

//Assets
import GameSettingsIcon from '../../../../assets/Game/GameSettingsIcon.png'
import GameSettingsMenu from './GameSettingsMenu'

const GameSettings = () => {
  const [open, setOpen] = useState(false)
  const toggleSettings = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }
  return (
    <Box>
      <Button
        onClick={() => toggleSettings()}
      >
        <img alt='settings' src={GameSettingsIcon} />
      </Button>

      {open === true ?
        <Box>
          <GameSettingsMenu />
        </Box>
        : null}
    </Box>
  )
}

export default GameSettings