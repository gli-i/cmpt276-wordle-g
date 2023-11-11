interface GOProps {
    restartGame: () => void;
    gameStatus?:string;
    score?:number;
}

export default function GameOver({ restartGame, gameStatus, score }:GOProps){

    return (
        <>
        <ul className="z-20 fixed inset-x-1/4 md:inset-x-1/3 top-1/4 bg-white p-4
            flex flex-col justify-center items-center gap-3
            md:text-lg lg:text-xl
        ">
            <li>{gameStatus ? 
                    gameStatus==="victory" ? "You won!" : "You ran out of guesses!"
                    : "Game over!"
                }</li>
            {score && 
            <li className="flex flex-col items-center">
                <p>Your score was: </p>
                <p className="font-semibold">{score}</p>
            </li>
            }
            {score && 
            <li className="flex flex-col items-center">
                <p>Top Score: </p>
                <p className="font-semibold">{score}</p>
            </li>
            }
            <button type="button" onClick={restartGame} className="bg-gray-300 border border-gray-500 rounded p-1">Restart</button>
        </ul>
        <div className="z-10 fixed w-full h-[100vh] bg-black opacity-30"></div>
        </>
    )
}