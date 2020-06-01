import React from 'react'
import { ItemTypes } from './Constants/ItemTypes'
import { useDrag } from 'react-dnd'

const knightStyle = {
    fontSize: '46px',
    fontWeight: 'bold',
    cursor: 'move',
}

export default function Knight() {

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })
    return (
        <div
            ref={drag}
            style={{
                ...knightStyle,
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            ♘
        </div>)
}

