import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Square from './Square'
import Knight from './Knight'
import { canMoveKnight, moveKnight } from './index'

const boardStyle = {
    width: '500px',
    height: '500px',
    display: 'flex',
    flexWrap: 'wrap',
}

const squareStyle = {
    width: '12.5%',
    height: '12.5%'
}

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
        <div key={i} style={squareStyle}
            onClick={() => handleSquareClick(x, y)}
        >
            <Square black={black}>{piece}</Square>
        </div>
    )
}

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY)
    }
}

export default function Board({ knightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={boardStyle}>{squares}</div>
        </DndProvider>
    )
}
