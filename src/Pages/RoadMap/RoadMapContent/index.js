import { Box, Stack } from '@mui/material'
import React from 'react'

//Inner components
import RoadMap1 from './RoadMap1';
import RoadMap2 from './RoadMap2';
import RoadMap3 from './RoadMap3';
import RoadMapText1 from './RoadMapText1';
import RoadMapText2 from './RoadMapText2';
import RoadMapText3 from './RoadMapText3';

const RoadMapContent = () => {
  return (
    <Stack>
      <Stack
        direction='row'
        marginTop='45px'
        marginBottom='45px'

      >
        <Box>
          <RoadMap3 />
        </Box>
        <Box>
          <RoadMapText3 />
        </Box>
      </Stack>
      <Stack
        direction='row'
        marginTop='45px'
        marginBottom='45px'
      >
        <Box>
          <RoadMapText2 />
        </Box>
        <Box>
          <RoadMap2 />
        </Box>
      </Stack>
      <Stack
        direction='row'
        marginTop='45px'
        marginBottom='45px'
      >
        <Box>
          <RoadMap1 />
        </Box>
        <Box>
          <RoadMapText1 />
        </Box>
      </Stack>
    </Stack>
  )
}

export default RoadMapContent