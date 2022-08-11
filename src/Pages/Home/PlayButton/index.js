import React from 'react'
import { Link } from 'react-router-dom';


import Play from '../../../assets/Home/Play.png'

const PlayButton = () => {
  return (
    <Link
      to='./Hooks_Game'
      style={{
        textDecoration: 'none',
      }}
    >
      <img
        alt='play'
        src={Play}
        style={{

          marginBottom: 85,

        }}
      />
    </Link>
  )
}

export default PlayButton