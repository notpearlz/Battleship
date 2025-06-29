class Ship {
  constructor() {
    this.length_ = 0;
    this.hit_ = 0;
    this.sunk_ = false;
  }

  hit() {
    this.hit_ += 1;

    //console.log(this.hit_)
    this.isSunk();
  }

  isSunk() {
    if (this.hit_ >= this.length_) {
      this.sunk_ = false;
      //console.log("SANK");
    }
  }
}

export { Ship };
