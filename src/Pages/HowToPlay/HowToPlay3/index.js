import React from 'react'
import { Link } from 'react-router-dom'
import HowToPlay3Image from '../../../assets/HowToPlay/HowToPlay3.png'


const HowToPlay3 = () => {
    return (
        <Link to='/'>
            <img 
            width='420px'
            alt='HowToPlay3' src={HowToPlay3Image} />
        </Link>
    )
}

export default HowToPlay3