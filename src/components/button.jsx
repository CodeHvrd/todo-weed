import React from 'react'

const event = () => {
    console.log('Me clickeaste!')
}

export const Button = ({ content, color }) => {
    return <button onClick = {event} className="button" style={{ backgroundColor: color }}>
        {content}
        </button>
}

