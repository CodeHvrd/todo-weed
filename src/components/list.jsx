import React from 'react'
import { Item } from './item'

export const List = ( {items, onClick}) => {
    return items.map( ( { color, content, id } ) => <Item id={id} content={content} color={color} onClick={onClick} />)
}
