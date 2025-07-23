import { GameBoard } from "./gameBoard.js";
import { Player } from "./player.js";
import { render } from "./renderDOM.js";

const battleship = function () {
  const player1 = new Player();
  const player2 = new Player();

  player1.name = "Player1";
  player2.name = "Player2";

  const board1 = new GameBoard();
  const board2 = new GameBoard();

  player1.board = board1;
  player2.board = board2;

  var curPlayer = player1;
  var curTurn = player1;
  // Ships to place for each player

  const startGame = function () {
    render(curPlayer.board);
  };

  const getBoards = function () {
    return [board1, board2];
  };

  const swapBoard = function () {
    curPlayer = curPlayer == player1 ? player2 : player1;
    render(curPlayer.board);
  };

  const getCurPlayer = function () {
    return curPlayer;
  };

  const getPlayers = function () {
    return [player1, player2];
  };

  const getTurn = function(){
    return curTurn;
  }

  const swapTurn = function(){
    curTurn = curTurn == player1 ? player2 : player1;
  } 

  const gameOver = function(){
    if (board1.gameOver()) {
      console.log("player2 wins");
    } else if (board2.gameOver()) {
      console.log("player1 wins");
    }
  }

  return { startGame, swapBoard, getBoards, getCurPlayer, getPlayers, getTurn, swapTurn, gameOver };
};
const game = new battleship();

export { game };
