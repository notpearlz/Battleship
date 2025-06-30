class Player {
  constructor() {
    this.type = null;
    this.gameBoard = null;
  }

  get type() {
    return this.type;
  }

  get board() {
    return this.gameBoard;
  }

  set type(newType) {
    this.type = newType;
  }

  set board(newBoard) {
    this.type = newBoard;
  }
}

export { Player };
