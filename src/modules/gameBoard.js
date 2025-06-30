import { Ship } from "./ship.js";

class GameBoard {
  constructor() {
    this.rows_ = 8;
    this.cols_ = 8;

    this.board = this.createBoard(this.rows, this.cols);

    this.missed = 0;
  }
  // Create Board
  // Returns board
  createBoard() {
    const board = [];

    for (let i = 0; i < this.cols_; i++) {
      board[i] = [];
      for (let j = 0; j < this.rows_; j++) {
        board[i][j] = [];
      }
    }

    return board;
  }

  // Prints the board
  printBoard() {
    console.log("\n\n\n");
    for (let i = 0; i < this.cols_; i++) {
      var temp = "";
      for (let j = 0; j < this.rows_; j++) {
        const square = this.board[i][j];
        if (square instanceof Ship) {
          temp += "AAA";
        } else {
          temp += "[ ]";
        }
      }
      console.log(temp);
    }
  }

  // Determine if all ships are sunk
  // Returns true if all ships sunk & false if not
  gameOver() {
    for (let i = 0; i < this.cols_; i++) {
      for (let j = 0; j < this.rows_; j++) {
        const square = this.board[i][j];
        if (square instanceof Ship && !square.isSunk()) {
          return false;
        }
      }
    }

    return true;
  }

  // Places a ship in the coordinates
  // Returns true if placed & false if coordinate is occupied
  placeShip(x, y) {
    if (this.board[x][y] instanceof Ship) {
      return false;
    }

    this.board[x][y] = new Ship();
    return true;
  }

  getShip(x, y) {
    if (this.board[x][y] instanceof Ship) {
      return this.board[x][y];
    }
    return null;
  }

  // Receive apair of coordinates and sends the hit function of the ship or coordinates of the missed shot
  // Returns true if hit and false if missed
  attackShip(x, y) {
    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
      return true;
    }
    return false;
  }

  get rows() {
    return this.rows_;
  }

  get cols() {
    return this.cols_;
  }

  set rows(newRow) {
    this.rows = newRow_;
  }

  set cols(newCol) {
    this.cols = newCol_;
  }
}

export { GameBoard };
