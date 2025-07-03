import { GameBoard } from "./modules/gameBoard.js";
import { Player } from "./modules/player.js";
import { render } from "./modules/renderDOM.js";

const battleship = function () {
  const player1 = new Player();
  const player2 = new Player();

  const board1 = new GameBoard();
  const board2 = new GameBoard();

  player1.board = board1;
  player2.board = board2;

  board1.placeShip(0, 0);
  var curPlayer = player1;

  const startGame = function () {
    // Ships to place for each player
    const ships = 1;
    const shipsPlaced = 0;

    //Placing ships phase
    for (let i = 0; i < ships; i++) {
      //place ships through buttons here
      const colInput = 1;
      const rowInput = 2;

      curPlayer.board.placeShip(colInput, rowInput);

      render(curPlayer.board);
    }

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

  const swapBoard = function () {
    curPlayer = curPlayer == player1 ? player2 : player1;
    render(curPlayer.board);
  };

  return { startGame, swapBoard };
};

const game = battleship();
game.startGame();

export const { swapBoard } = game;
