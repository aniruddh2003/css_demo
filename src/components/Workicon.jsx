import React from 'react'
import '../App.css'
function Workicon(props) {
  return (
    <div className='time-icon'>
        <img src={props.img_src} className="object-cover" alt="img"/>
    </div>
  )
}

export default Workicon