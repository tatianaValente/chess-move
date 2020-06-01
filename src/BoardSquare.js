import React from 'react'
import Square from './Square'
import { canMoveKnight, moveKnight } from './index'
import { ItemTypes } from './Constants/ItemTypes'
import { useDrop } from 'react-dnd'
import { Overlay } from './Overlay'

export default function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1

    const boardSquareStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
    }

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: (mon) => ({
            isOver: !!mon.isOver(),
            canDrop: !!mon.canDrop()
        })
    })

    return (
        <div
            ref={drop}
            style={boardSquareStyle}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}