import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { render } from "./renderDOM.js";

const battleship = function () {
  const player1 = new Player();
  const player2 = new Player();

  const board1 = new GameBoard();
  const board2 = new GameBoard();

  player1.board = board1;
  player2.board = board2;

  var curPlayer = player1;

  // Ships to place for each player

  const startGame = function () {
    render(curPlayer.board);

    //Attacking ships phase
    // while (!board1.gameOver() || !board2.gameOver()) {
    //   console.log("test");
    // }

    // Game over
    // if (board1.gameOver()) {
    //   console.log("player2 wins");
    // } else if (board2.gameOver()) {
    //   console.log("player1 wins");
    // }
  };

  const getBoards = function () {
    return [board1, board2];
  };

  const swapBoard = function () {
    curPlayer = curPlayer == player1 ? player2 : player1;
    render(curPlayer.board);
  };

  return { startGame, swapBoard, getBoards };
};
const game = new battleship();

export { game };
