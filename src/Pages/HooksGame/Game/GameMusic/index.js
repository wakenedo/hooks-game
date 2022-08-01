import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'

import { Box, Button } from '@mui/material'

//Assets
import MusicButton from '../../../../assets/MusicButton.png'
import MusicButtonOff from '../../../../assets/MusicButtonOff.png'

const GameMusic = () => {
  const [music, setMusic] = useState(true)

  const toggleMusic = () => {
    if (music === true) {
      setMusic(false)
    } else {
      setMusic(true)
    }
  }

  return (
    <Box>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=R4PxoAF5pRQ'
        playing={music}
        loop={true}
        width={0}
        height={0}
      />

      <Button
        onClick={() => toggleMusic()}
      >
        {music === true ? <img alt='MusicButtonOn' src={MusicButton} /> : <img alt='MusicButtonOff' src={MusicButtonOff} />}
      </Button>
    </Box>
  )
}

export default GameMusic