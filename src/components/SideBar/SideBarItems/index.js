import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

//Assets
import BallIcon from '../../../assets/svg/ball-svgrepo-com.svg'

//Constants
import Items from '../../../constants/Items'

const SideBarItems = () => {
  const [eventString, setEventString] = useState('')

  const itemNameOnMouseOver = (e) => {
    let str = e.target.childNodes[0].wholeText
    setEventString(str)
  }

  const itemNameOnMouseLeave = () => {
    setEventString('')
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
          >
            <Box
              key={Items[index]}
              position='left'
              paddingRight='10px'
            >
              {item.name === eventString ? <img alt='ball-icon' width={25} src={BallIcon} /> : ''}
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
                onMouseOver={itemNameOnMouseOver}
                onMouseLeave={itemNameOnMouseLeave}
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