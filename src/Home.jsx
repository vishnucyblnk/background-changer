import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [bgclr,setBgclr] = useState('lavender')
    const bgChanger = (colour)=>{
        setBgclr(colour)
    }

  return (
    <div className='homeBg' style={{backgroundColor: bgclr }}>
        <h1 className='homeHead rise'>Background Color Changer</h1>
        <div className='homeButt'>
            <button type='button' className='button3' value='red' onClick={(e)=>bgChanger(e.target.value)}>RED</button>
            <button type='button' className='button3' value='green' onClick={(e)=>bgChanger(e.target.value)}>GREEN</button>
            <button type='button' className='button3' value='blue' onClick={(e)=>bgChanger(e.target.value)}>BLUE</button>
            <button type='button' className='button3' value='yellow' onClick={(e)=>bgChanger(e.target.value)}>YELLOW</button>
            
        </div>
    </div>
  )
}

export default Home