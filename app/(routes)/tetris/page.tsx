import Board from "@/app/components/Tetris/Board"
import {EmptyCell} from '@/app/types/tetris'

import "@/app/styles/pages/tetris.scss"

const board = Array(20)
.fill(null)
.map(() => Array(12).fill(EmptyCell.Empty))

export default function Page(){
    return (
        <>
            <h1>Tetris</h1>
            <Board currentBoard={board}/>
        </>
    )
}