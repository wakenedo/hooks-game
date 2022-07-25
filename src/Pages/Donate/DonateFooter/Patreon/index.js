import React from 'react'
import { Link } from 'react-router-dom'
import PatreonImage from '../../../../assets/Patreon.png'


const Patreon = () => {
    return (
        <Link to='/'>
            <img 
            width='420px'
            alt='Patreon' src={PatreonImage} />
        </Link>
    )
}

export default Patreon