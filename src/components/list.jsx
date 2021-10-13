import React from 'react'
import { Item } from './item'

export const List = ( {items}) => {
    return items.map(item => <Item text={item} />)
}

