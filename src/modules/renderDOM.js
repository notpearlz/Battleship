import { getPhase, addPhase, placedAllShips } from "../modules/gameState.js";
import { game } from "./battleship.js";


let reveal = false;

function swapBoard(){
  game.swapBoard();
  game.swapTurn();
  render(game.getCurPlayer().board)
}

function mainMenu(){
  const main = document.getElementById("main");
  main.innerHTML = "";
  
  const phase = document.createElement("div");
  phase.setAttribute("id", "phase")

  const consolediv = document.createElement("div");
  consolediv.setAttribute("id", "console")

  const turn = document.createElement("div");
  turn.setAttribute("id", "turn")

  const currentBoard = document.createElement("div");
  currentBoard.setAttribute("id", "currentBoard")

  const board = document.createElement("div");
  board.classList.add("board");
  board.setAttribute("id", "player")

  const swapboardBtn = document.createElement("button");
  swapboardBtn.classList.add("swap-boards")
  swapboardBtn.innerHTML = "Swap Boards"
  swapboardBtn.addEventListener("click", () => {
    swapBoard();
  });

  const showShipsBtn = document.createElement("button");
  showShipsBtn.classList.add("swap-boards")
  showShipsBtn.innerHTML = "Reveal Ships"
  showShipsBtn.addEventListener("click", () => {
    reveal = reveal == true ? false : true;
    render(game.getCurPlayer().board)
  });




  main.append(phase);
  main.append(consolediv);
  main.append(turn);
  main.append(currentBoard);
  main.append(board);
  main.append(swapboardBtn);
  main.append(showShipsBtn);

}

function updateTurn(board) {
  const turnConsole = document.getElementById("turn");

  const turn = game.getTurn();

  turnConsole.innerHTML = turn.name + "'s turn";

  currentBoard.innerHTML = game.getCurPlayer().name + "'s board";

}
function updatePhase() {
  const phase = document.getElementById("phase");

  var p = getPhase();
  if (p == 0) {
    phase.innerHTML = "Not started";
  } else if (p == 1) {
    phase.innerHTML = "Placing Ships";
    if (placedAllShips(game.getBoards())) {
      addPhase();
    }
  } else if (p == 2) {
    phase.innerHTML = "Attacking Ships";
  } else if (p == 3){
    phase.innerHTML = "Game over: " + game.getTurn().name + " wins!";
  }

  if (p != getPhase()) {
    updatePhase();
  }
}

function renderConsole(board) {
  const gameConsole = document.getElementById("console");

  const maxShips = board.maxShips;
  const shipsToPlace = maxShips - board.curShips;

  const phase = getPhase();

  if (phase == 0) {
    gameConsole.innerHTML = "Not started";
  } else if (phase == 1) {
    gameConsole.innerHTML = "Ships to place: " + shipsToPlace;
  } else if (phase == 2) {
    gameConsole.innerHTML = "Ships remaining: " + board.curShips;
  }
}

function render(board) {

  mainMenu();
  createBoard(board);

}

function clickSquare(board, row, col) {
  const phase = getPhase();
  const curTurn = game.getTurn();

  if (phase == 1) {
    board.placeShip(row, col);
    createBoard(board); // Only redraw this player's board
    return;
  }else if (phase == 2 && curTurn.board !== board) {
    if (board.attackShip(row, col)) {
      console.log("HIT");
    } else {
      console.log("MISS");
    }

    if (board.gameOver()) {
      addPhase();
      updatePhase();

    } 
    render(game.getCurPlayer().board); 
  }
}


function displayShip(board, i,j){

  const square = document.createElement("button");
  square.classList.add("square")
      // apply cols & rows data attribute
      square.setAttribute("data-row", i);
      square.setAttribute("data-column", j);

      square.addEventListener("click", () => {
        clickSquare(board, i, j);
      });

      // Fill out ships

      if (board.getShip(i, j)) {
        if (board.getShip(i, j).sunk == true) {
          square.innerHTML = "HIT";
          square.classList.add("hit");
        } else if(getPhase() == 1 || reveal) {

          square.innerHTML = "SHIP";
          square.classList.add("ship");

        } else {
          square.innerHTML = "____";

        }
      } else {
        square.innerHTML = "____";
      }
      return square;
}
function createBoard(board) {
  updatePhase();
  updateTurn(board);
  renderConsole(board);

  const player = document.getElementById("player");
  player.innerHTML='';

  for (let i = 0; i < board.rows; i++) {
    for (let j = 0; j < board.cols; j++) {

      const square = displayShip(board, i,j)
      

      // append to a parent div
      player.append(square);
    }
  }
}

export { render };
