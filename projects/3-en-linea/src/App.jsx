
import './App.css'
import './index.css'
import confetti from "canvas-confetti"
import { useState } from 'react'

const TURNS ={
  X :'x',
  O :'o'
}

const Square =({children, isSelected, updateBoard, index})=>{
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  
  const handleClick = ()=>{
    updateBoard(index)
    {console.log(TURNS)}
  }
  return(
    <div onClick={handleClick} className ={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

 

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)  
  const [winner, setWinner] = useState(null)
  
  const checkWinner =(boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const[a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame =(newBoard)=>{
    //Si todos los elementos square del tablero son distintos de null retorna true
    return newBoard.every((square) => square!= null)
  }
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
    const newWinner = checkWinner(newBoard)
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
      <button onClick={resetGame}>Reiniciar</button>
      {
        winner != null &&(
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Gano : '
                }
              </h2>

              <header className='win'>
                {winner && <Square> {winner} </Square>}
              </header>
            
            <footer>
              <button onClick={resetGame}>
                Empezar de nuevo
              </button>
            </footer>
            </div>
          </section>
        )
      }


    </main>
  )

}

export default App