import { GameBoard } from "./modules/gameBoard.js";
import { Player } from "./modules/player.js";
import { render } from "./modules/renderDOM.js";

const player1 = new Player();
const player2 = new Player();

const board1 = new GameBoard();
const board2 = new GameBoard();

player1.board = board1;
player2.board = board2;

board1.placeShip(0, 0);

const startGame = function () {
  var curPlayer = player1;

  // Ships to place for each player
  const ships = 1;

  //Placing ships phase
  render(curPlayer.board);
  for (let i = 0; i < ships * 2; i++) {
    const colInput = 1;
    const rowInput = 2;

    curPlayer.board.placeShip(colInput, rowInput);

    render(curPlayer.board);

    curPlayer = curPlayer == player1 ? player2 : player1;
  }

  //Attacking ships phase



  // Game over
  if (board1.gameOver()) {
    console.log("player2 wins");
  } else if (board2.gameOver()) {
    console.log("player1 wins");
  }
};

startGame();
