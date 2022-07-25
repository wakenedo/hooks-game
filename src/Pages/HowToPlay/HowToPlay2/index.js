import React from 'react'
import { Link } from 'react-router-dom'
import HowToPlay2Image from '../../../assets/HowToPlay/HowToPlay2.png'


const HowToPlay2 = () => {
    return (
        <Link to='/'>
            <img 
            width='420px'
            alt='HowToPlay2' src={HowToPlay2Image} />
        </Link>
    )
}

export default HowToPlay2