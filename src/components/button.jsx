import React from 'react'

export const Button = ({ content, color, onClick }) => {
    return <button onClick={onClick} className="button" style={{ backgroundColor: color }}>
        {content}
        </button>
}

