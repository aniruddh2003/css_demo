import React from 'react' 
import "../App.css"
function Content(props) {
    return (
        <>
            <img className='event-icon' src={props.image} alt={props.alt}/>
            <h2 className='name'>{props.name}</h2>
            <p>{props.about}</p>
        </>
    )
}

export default Content