import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

//Assets
import BallIcon from '../../../assets/svg/ball-svgrepo-com.svg'

//Constants
import Items from '../../../constants/Items'

const SideBarItems = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }
  const handleMouseLeave = () => {
    setIsHovering(false)
  }
  return (
    <>
      {Items.map((item, index) => {
        return (
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            marginBottom='25px'
            height='fit-content'

          >
            <Box
              key={Items[index].id}
              position='left'
              justifyContent='space-evenly'
              paddingRight='10px'
            >
              {isHovering ? <img alt='ball-icon' width={25} src={BallIcon} /> : null}
            </Box>

            <Link
              key={Items[index].id}
              to={Items[index].url}
              style={{
                textDecoration: 'none'
              }}
            >

              <Typography
                key={Items[index].id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                color='#282C34'
                fontWeight='bold'
                fontSize='18px'
                sx={{
                  '&:hover': {
                    color: '#5A3392',
                  },
                }}
              >
                {Items[index].name}
              </Typography>
            </Link>
          </Box>
        )
      })}

    </>


  )
}

export default SideBarItems