import React from 'react'
import { Link } from 'react-router-dom'
import PaypalImage from '../../../../assets/Paypal.png'


const Paypal = () => {
    return (
        <Link to='/'>
            <img 
            alt='Paypal' 
            src={PaypalImage} 
            width='420px'
            />
        </Link>
    )
}

export default Paypal