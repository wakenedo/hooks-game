import { Stack } from '@mui/material'
import React from 'react'

//Inner components
import RoadMapTopRow from './RoadMapTopRow';
import RoadMapMidRow from './RoadMapMidRow';
import RoadMapBotRow from './RoadMapBotRow';

const RoadMapContent = () => {
  return (
    <Stack>
      <Stack
        direction='row'
        marginTop='45px'
        marginBottom='45px'

      >
        <RoadMapTopRow />
      </Stack>
      <Stack
        direction='row'
        marginTop='45px'
        marginBottom='45px'
      >
        <RoadMapMidRow />
      </Stack>
      <Stack
        direction='row'
        marginTop='45px'
        marginBottom='45px'
      >
        <RoadMapBotRow />
      </Stack>
    </Stack>
  )
}

export default RoadMapContent