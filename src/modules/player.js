class Player {
  constructor() {
    this.type_ = null;
    this.gameBoard_ = null;
  }

  get type() {
    return this.type_;
  }

  get board() {
    return this.gameBoard_;
  }

  set type(newType) {
    this.type = newType;
  }

  set board(newBoard) {
    this.gameBoard_ = newBoard;
  }
}

export { Player };
