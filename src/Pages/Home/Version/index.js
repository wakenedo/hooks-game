import React from 'react'

import { Typography } from '@mui/material'

const Version = () => {
  return (
    <Typography
      letterSpacing={5.5}
      sx={{
        fontSize: {
          xs: 23
        }
      }}
    >
      version Beta
    </Typography>
  )
}

export default Version