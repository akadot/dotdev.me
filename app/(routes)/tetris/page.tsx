'use client'
import Board from "@/app/components/Tetris/Board"
import UpcomingBlocks from "@/app/components/Tetris/UpcomingBlocks"
import { useTetris } from '@/app/hooks/useTetris'

import '@/app/styles/pages/tetris.scss'

export default function Page() {
    const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

    return (
        <main>
            
            <section className="game">
                <Board currentBoard={board} />
                <div className="controls">
                    <h2>Score: {score}</h2>
                    {isPlaying ? (
                        <>
                            <p>Next Pieces:</p>
                            <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
                        </>
                    ) : (
                        <button onClick={startGame}>New Game</button>
                    )}
                </div>
            </section>
            <section className="leaderboard">
                <h2>Leaderboards</h2>
                <section className="score">
                    <section className="user_info">
                        <h3>name</h3>
                        <span>100</span>
                    </section>
                    <p>lalalalalalalalal</p>
                </section>
            </section>
        </main>
    )
}