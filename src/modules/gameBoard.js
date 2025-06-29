class GameBoard {
  constructor() {
    this.rows = 8;
    this.cols = 8;

    this.board = this.createBoard(this.rows, this.cols);

    this.missed = 0;
  }
  // Create Board
  // Returns board
  createBoard() {}

  // Prints the board
  printBoard() {}

  // Determine if all ships are sunk
  // Returns true if all ships sunk & false if not
  gameOver() {}

  // Places a ship in the coordinates
  // Returns true if placed & false if coordinate is occupied
  placeShip() {}

  // Receive apair of coordinates and sends the hit function of the ship or coordinates of the missed shot
  // Returns true if hit and false if missed
  attackShip(x, y) {}
}

export { GameBoard };
