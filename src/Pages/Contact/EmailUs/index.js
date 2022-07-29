import React, { useState } from 'react'
import { Typography, Box, Stack, TextField, TextareaAutosize, Button } from '@mui/material'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init('user_id');





const EmailUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {


    if (name && email && message) {

      const serviceId = 'gamehookcontact_lusp1eq';
      const templateId = 'template_85op4zo';
      const publicKey = 'rD66fiCRkpFBJkXxt';
      const templateParams = {
        name,
        email,
        message
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
      alert('💌 E-mail Sent Successfully')
    } else {
      alert('Please fill in all fields.');
    }

  };



  return (
    <>
      <Typography
        marginTop='20px'
        marginLeft='20px'
        fontSize='33px'
        color='#FFFF'
        letterSpacing={5}
      >
        E-mail the project
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
              Name :
            </Typography>
            <Box
              marginLeft='15px'
              marginTop='5px'
            >
              <TextField
                placeholder='Name'
                value={name}
                onChange={e => setName(e.target.value)}
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
              Email :
            </Typography>
            <Box
              marginLeft='15px'
              marginTop='5px'
            >
              <TextField
                type='email'
                value={email}
                placeholder='Your email address'
                onChange={e => setEmail(e.target.value)}
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
              If you have noticed a bug , have any suggestions, doubts or just want to send a feedback, please do send the project an e-mail.
            </Typography>
          </Box>
          <Box
            marginLeft='225px'
            marginTop='30px'
          >
            <Button
              onClick={submit}
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
            Message :
          </Typography>
          <Box
            width='765px'
          >
            <TextareaAutosize
              value={message}
              onChange={e => setMessage(e.target.value)}
              minRows={18.5}
              maxRows={18.5}
              cols={105}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default EmailUs