import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//Assets
import Play from '../../../assets/Home/Play.png'

const PlayButton = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          marginBottom: 85,
          transition: isHovering ? 'ease-in-out 0.4s' : '',
          transform: isHovering ? 'scale(1.3)' : ''
        }}
      />
    </Link>
  )
}

export default PlayButton