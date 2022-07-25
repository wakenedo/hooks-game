import React from 'react'
import { Link } from 'react-router-dom'
import HowToPlay1Image from '../../../assets/HowToPlay/HowToPlay1.png'


const HowToPlay1 = () => {
    return (
        <Link to='/'>
            <img 
            width='420px'
            alt='HowToPlay1' src={HowToPlay1Image} />
        </Link>
    )
}

export default HowToPlay1