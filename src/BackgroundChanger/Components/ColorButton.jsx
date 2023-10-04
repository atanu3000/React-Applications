import React from 'react'

function ColorButton({color, changecolor}) {
  return (
    <button 
    className={`capitalize px-3 py-2 rounded-full text-white` } 
    style={{backgroundColor: color}}
    onClick={() => changecolor(color)}>
    {color}
    </button>
  )
}

export default ColorButton
