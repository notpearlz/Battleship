class Player {
  constructor() {
    this.type_ = null;
    this.gameBoard_ = null;
    this.name_ = null;
  }

  get type() {
    return this.type_;
  }

  get board() {
    return this.gameBoard_;
  }

  get name() {
    return this.name_;
  }

  set type(newType) {
    this.type = newType;
  }

  set board(newBoard) {
    this.gameBoard_ = newBoard;
  }
  set name(newName) {
    this.name_ = newName;
  }
}

export { Player };
