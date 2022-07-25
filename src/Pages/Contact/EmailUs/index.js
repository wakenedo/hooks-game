import React from 'react'
import { Typography, Box, Input, Stack, TextField, Button } from '@mui/material'




const EmailUs = () => {
  return (
    <>
      <Typography
        marginTop='20px'
        marginLeft='20px'
        fontSize='33px'
        color='#FFFF'
        letterSpacing={5}
      >
        E-mail us
      </Typography>
      <Box
        marginTop='20px'
        marginLeft='20px'
        marginBottom='20px'
        backgroundColor='#282C34'
        width='1565px'
        height='340px'
        display='flex'
      >
        <Stack
          direction='column'
        >
          <Box
            paddingTop='10px'
          >
            <Typography
              marginLeft='20px'
              color='#FFFF'

            >
              E-mail Title :
            </Typography>
            <Box
              marginLeft='15px'
              marginTop='5px'
            >
              <TextField
                placeholder='Title...'
                sx={{
                  width: '700px',
                  backgroundColor: '#FFFF',
                }}
              />
            </Box>
          </Box>
          <Box
            paddingTop='20px'
          >
            <Typography
              marginLeft='20px'
              color='#FFFF'

            >
              Matter :
            </Typography>
            <Box
              marginLeft='15px'
              marginTop='5px'
            >
              <TextField
                placeholder='Matter...'
                sx={{
                  width: '700px',
                  backgroundColor: '#FFFF',
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              marginLeft='20px'
              fontSize='12px'
              color='#FFFF'
              marginTop='10px'
            >
              If you have noticed a bug , have any sugestions, doubts or just want to send a feedback, please do send us an e-mail.
            </Typography>
          </Box>
          <Box
            marginLeft='225px'
            marginTop='30px'
          >
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#5A3392',
                paddingLeft: '90px',
                paddingRight: '90px',
              }}
            >
              Send
            </Button>
          </Box>
          <Box
            marginLeft='230px'
            marginTop='12px'
          >
            <Typography
              fontSize='18px'
              color='#FFFF'
            >
              hooksgame1@gmail.com
            </Typography>
          </Box>
        </Stack>
        <Box
          marginLeft='40px'
          marginTop='15px'

        >
          <Typography
            color='#ffff'
          >
            E-mail body :
          </Typography>
          <Box>
            <TextField
              sx={{
                width: '795px',
                backgroundColor: '#FFFF',
                multiline: true
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default EmailUs