class Ship {
  constructor() {
    this.length_ = 0;
    this.hit_ = 0;
    this.sunk_ = false;
  }

  hit() {
    this.hit += 1;

    this.isSunk();
  }

  isSunk() {
    if (this.hit >= this.length) {
      this.sunk = false;
    }
  }
}

export { Ship };
