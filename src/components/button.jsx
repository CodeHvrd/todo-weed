import React from 'react'


export const Button = ({ content, color }) => {
    return <button className="button" style={{ backgroundColor: color }} >{content}</button>
}

