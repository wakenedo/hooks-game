import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

//Assets
import BallIcon from '../../../assets/svg/ball-svgrepo-com.svg'

//Constants
import Items from '../../../constants/Items'

const SideBarItems = () => {

  const showIcon = (e) => {
    const event = e.target
    console.log(event)
  }

  return (
    <>
      {Items.map((item, index) => {
        console.log(item, index)
        return (
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            marginBottom='25px'
          >
            <Box
              key={Items[index]}
              position='left'
              paddingRight='10px'
            >
              {item.id === index ? <img alt='ball-icon' width={25} src={BallIcon} /> : ''}
            </Box>

            <Link
              key={Items[index].id}
              to={Items[index].url}
              style={{
                textDecoration: 'none'
              }}
            >

              <Typography
                key={item.id}
                color='#282C34'
                fontWeight='bold'
                fontSize='18px'
                onMouseOver={showIcon}
                sx={{
                  '&:hover': {
                    color: '#5A3392',
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          </Box>
        )
      })}

    </>


  )
}

export default SideBarItems