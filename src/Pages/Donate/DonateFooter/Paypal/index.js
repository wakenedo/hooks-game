import React from 'react'
import { Link } from 'react-router-dom'
import PaypalImage from '../../../../assets/Paypal.png'


const Paypal = () => {
    return (
        <a href='https://www.paypal.com/donate/?hosted_button_id=3ENBWTDB6KSD6'>
            <img 
            alt='Paypal' 
            src={PaypalImage} 
            width='420px'
            />
        </a>
    )
}

export default Paypal