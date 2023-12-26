'use client'
import Board from "@/app/components/Tetris/Board"
import UpcomingBlocks from "@/app/components/Tetris/UpcomingBlocks"
import { useTetris } from '@/app/hooks/useTetris'

import "@/app/styles/pages/tetris.scss"

export default function Page() {
    const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

    return (
        <>
            <h1>Tetris</h1>
            <Board currentBoard={board} />
            <div className="controls">
                <h2>Score: {score}</h2>
                {isPlaying ? (
                    <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
                ) : (
                    <button onClick={startGame}>New Game</button>
                )}
            </div>
        </>
    )
}