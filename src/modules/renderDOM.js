import { GameBoard } from "./gameBoard.js";

function render(board1, board2) {
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  createBoard(player1, board1);
  createBoard(player2, board2);
}

function createBoard(player, board) {
  const rows = board.rows;
  const cols = board.cols;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const square = document.createElement("button");
      // apply cols & rows data attribute

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
