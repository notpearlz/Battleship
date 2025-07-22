class Ship {
  constructor() {
    this.length_ = 1;
    this.hit_ = 0;
    this.sunk_ = false;
  }

  hit() {


    if (this.isSunk() == true) {
      return false;
    } else {
      this.hit_ += 1;
      this.isSunk();
      return true;
    }
  }

  isSunk() {
    if (this.hit_ >= this.length_) {
      this.sunk_ = true;
    }

    return this.sunk;
  }

  get sunk() {
    return this.sunk_;
  }
}

export { Ship };
