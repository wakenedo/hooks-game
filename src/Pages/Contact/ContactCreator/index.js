import React from 'react'
import { Typography } from '@mui/material'

const ContactCreator = () => {
    return (
        <>
            <Typography
                marginTop='45px'
                marginLeft='20px'
                fontSize='33px'
                color='#FFFF'
                letterSpacing={5}
            >
                Contact the creator
            </Typography>
            <Typography
                marginTop='15px'
                marginLeft='20px'
                fontSize='14.5px'
                color='#FFFF'
                letterSpacing={5}
                maxWidth='1565px'
                textAlign='justify'
            >
                Hello, there. These are my personal links where you can reach out to me. If is anything related to this project specifically , then use the email below , my personal links are for matters aside this project, just to keep things organized. Partnership, advertisement, business opportunities in general that don’t relate directly to this project are welcome! I’m a passionate javaScriipt developer, and a first time game designer. I work with front ent, focused on React, which is the framework im using for this project. If you have any tips or any kind of feedback please reach out.
            </Typography>
        </>
    )
}

export default ContactCreator