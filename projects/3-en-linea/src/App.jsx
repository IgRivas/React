
import './App.css'
import './index.css'
import confetti from "canvas-confetti"
import { useState } from 'react'

import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { TURNS} from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
 

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)  
  const [winner, setWinner] = useState(null)
  


  const updateBoard =(index)=>{
    //Si la casilla ya tiene un elemento, no la actualizamos
    if(board[index] || winner ) return
    //Actualizamos el tablero a partir de una copia
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Condicional, si el turno es de X darle turno al O y biceversa
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if( checkEndGame(newBoard)){
      setWinner(false)
    }

  }
  const resetGame =()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  return (
    <main className='board'>
      <h1>Tres En Linea</h1>
      <section className='game'>
      {
        board.map(( _, index)=>{
          return (
           <Square
           key={index}
           index={index}
           updateBoard={updateBoard}
           >
            {board[index]}
           </Square>
          )
        })
      }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
      <button onClick={resetGame}>Reiniciar</button>
     


    </main>
  )

}

export default App
