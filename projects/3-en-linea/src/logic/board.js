import {WiNNER_COMBOS} from "../constants.js"

export   const checkWinnerFrom =(boardToCheck) =>{
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

  export const checkEndGame =(newBoard)=>{
    //Si todos los elementos square del tablero son distintos de null retorna true
    return newBoard.every((square) => square!= null)
  }