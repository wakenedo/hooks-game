import { Box } from '@mui/material'
import React from 'react'

//Inner Components
import RoadMap1 from './RoadMap1'
import RoadMapText1 from './RoadMapText1'

const RoadMapBotRow = () => {
  return (
    <>
      <Box>
        <RoadMap1 />
      </Box>
      <Box>
        <RoadMapText1 />
      </Box>
    </>
  )
}

export default RoadMapBotRow