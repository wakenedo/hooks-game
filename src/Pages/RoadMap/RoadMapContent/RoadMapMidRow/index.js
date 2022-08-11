import { Box } from '@mui/material'
import React from 'react'

//Inner Components
import RoadMap2 from './RoadMap2'
import RoadMapText2 from './RoadMapText2'

const RoadMapMidRow = () => {
  return (
    <>
      <Box>
        <RoadMapText2 />
      </Box>
      <Box>
        <RoadMap2 />
      </Box>
    </>
  )
}

export default RoadMapMidRow