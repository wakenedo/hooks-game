import { Box } from '@mui/material'
import React from 'react'

//Inner Components
import RoadMap3 from './RoadMap3'
import RoadMapText3 from './RoadMapText3'

const RoadMapTopRow = () => {
  return (
    <>
      <Box>
        <RoadMap3 />
      </Box>
      <Box>
        <RoadMapText3 />
      </Box>
    </>
  )
}

export default RoadMapTopRow