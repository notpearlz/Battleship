import { GameBoard } from "./gameBoard.js";
import { getPhase, addPhase, placedAllShips } from "../modules/gameState.js";
import { game } from "./battleship.js";

const swap = (function () {
  const swapBtn = document.getElementById("swap");

  swapBtn.addEventListener("click", () => {
    game.swapBoard();
  });
})();

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
  }

  if (p != getPhase()) {
    updatePhase();
  }
}

function renderConsole(board) {
  const console = document.getElementById("console");

  const maxShips = board.maxShips;
  const shipsToPlace = maxShips - board.curShips;

  const phase = getPhase();
  if (phase == 0) {
    console.innerHTML = "Not started";
  } else if (phase == 1) {
    console.innerHTML = "Ships to place: " + shipsToPlace;
  } else if (phase == 2) {
    console.innerHTML = "Ships remaining: " + board.curShips;
  }
}

function render(board) {
  const player = document.getElementById("player");

  createBoard(player, board);
}

function clickSquare(board, row, col) {
  const phase = getPhase();
  if (phase == 1) {
    board.placeShip(row, col);
  } else if (phase == 2) {
    if (board.attackShip(row, col)) {
      console.log("HIT");
    } else {
      console.log("MISS");
    }
  }

  createBoard(player, board);
}
function createBoard(player, board) {
  player.innerHTML = "";
  updatePhase();
  for (let i = 0; i < board.rows; i++) {
    for (let j = 0; j < board.cols; j++) {
      renderConsole(board);
      const square = document.createElement("button");

      // apply cols & rows data attribute
      square.setAttribute("data-row", i);
      square.setAttribute("data-column", j);

      square.addEventListener("click", () => {
        clickSquare(board, i, j);
      });

      // Fill out ships

      if (board.getShip(i, j)) {
        if (board.getShip(i,j).sunk == true) {
          square.innerHTML = "HIT";
        } else {
          square.innerHTML = "SHIP";
        }
      } else {
        square.innerHTML = "____";
      }

      // append to a parent div
      player.append(square);
    }
  }
}

export { render };
