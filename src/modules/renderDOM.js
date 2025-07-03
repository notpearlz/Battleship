import { GameBoard } from "./gameBoard.js";
import { swapBoard } from "../main.js";

const swapBtn = document.getElementById("swap");

swapBtn.addEventListener("click", () => {
  swapBoard();
});



function render(board) {
  const player = document.getElementById("player");

  createBoard(player, board);
}

function clickSquare(board, row, col) {
  board.placeShip(row, col);
  createBoard(player, board);
}

function createBoard(player, board) {
  player.innerHTML = "";
  const rows = board.rows;
  const cols = board.cols;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const square = document.createElement("button");
      // apply cols & rows data attribute
      square.setAttribute("data-row", i);
      square.setAttribute("data-column", j);

      square.addEventListener("click", () => {
        clickSquare(board, i, j);
      });
      // Fill out ships
      if (board.getShip(i, j)) {
        square.innerHTML = "SHIP";
      } else {
        square.innerHTML = "____";
      }

      // append to a parent div
      player.append(square);
    }
  }
}

export { render };
