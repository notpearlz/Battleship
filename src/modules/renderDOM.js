import { GameBoard } from "./gameBoard.js";
import { getPhase, addPhase, placedAllShips } from "../modules/gameState.js";
import { game } from "./battleship.js";

var curboard = null;

const swapBtn = document.getElementById("swap");
const currentBoard = document.getElementById("currentBoard");

swapBtn.addEventListener("click", () => {
  game.swapBoard();
  render(game.getCurPlayer().board)
});

function updateTurn(board) {
  const turnConsole = document.getElementById("turn");

  const players = game.getPlayers();
  const turn = game.getTurn();

  if (turn.board !== board) {
    turnConsole.innerHTML = "Not your turn";
    if (board == players[0].board) {
      turnConsole.innerHTML = players[1].name + "'s turn";
    } else {
      turnConsole.innerHTML = players[0].name + "'s turn";
    }
  } else if (turn.board === board) {
    turnConsole.innerHTML = game.getCurPlayer().name + "'s turn";
  }

  if (curboard == players[0].board) {
    currentBoard.innerHTML = players[0].name + "'s board";
  } else {
    currentBoard.innerHTML = players[1].name + "'s board";
  }
}
function updatePhase() {
  const phase = document.getElementById("phase");

  var p = getPhase();
  if (p == 0) {
    phase.innerHTML = "Not started";
    if (true) {
      //started
      addPhase();
    }
  } else if (p == 1) {
    phase.innerHTML = "Placing Ships";
    if (placedAllShips(game.getBoards())) {
      addPhase();
    }
  } else if (p == 2) {
    phase.innerHTML = "Attacking Ships";
  } else if (p == 3){
    phase.innerHTML = "Game over: " + game.getCurPlayer().name + " wins!";
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
  const player = document.getElementById("player");

  curboard = board;
  updateTurn(board);
  createBoard(player, board);
}

function clickSquare(board, row, col) {
  const phase = getPhase();

  const curTurn = game.getTurn();


  if (phase == 1 && curTurn.board == board) {
    board.placeShip(row, col);
    if (board.hasMaxShips()) {
      game.swapTurn();
    }
  } else if (phase == 2 && curTurn.board != board) {

    if (board.attackShip(row, col)) {
      console.log("HIT");
    } else {
      console.log("MISS");
    }

    if(board.gameOver()){
      console.log("Game Over")
      addPhase()
    } else {
      game.swapTurn();
      updateTurn(board);
    }

  }

  createBoard(player, board);
}


function displayShip(board, i,j){
  const square = document.createElement("button");

      // apply cols & rows data attribute
      square.setAttribute("data-row", i);
      square.setAttribute("data-column", j);

      square.addEventListener("click", () => {
        clickSquare(board, i, j);
        if(getPhase() == 2 && game.getCurPlayer() == game.getTurn()){
          game.swapBoard();
        }
      });

      // Fill out ships

      if (board.getShip(i, j)) {
        if (board.getShip(i, j).sunk == true) {
          square.innerHTML = "HIT";
          square.classList.add("hit");
        } else if(getPhase() == 1 || game.getCurPlayer() == game.getTurn()) {
          square.innerHTML = "SHIP";
          square.classList.add("ship");

        }
      } else {
        square.innerHTML = "____";
      }
      return square;
}
function createBoard(player, board) {
  player.innerHTML = "";
  updatePhase();
  updateTurn(board);

  for (let i = 0; i < board.rows; i++) {
    for (let j = 0; j < board.cols; j++) {
      renderConsole(board);

      const square = displayShip(board, i,j)
      

      // append to a parent div
      player.append(square);
    }
  }
}

export { render };
