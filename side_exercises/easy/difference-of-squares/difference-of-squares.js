export class Squares {
  constructor(n) {
    this.nArray = [...Array(n).keys()].map(x => ++x);
  }

  get sumOfSquares() {
    const squares = this.nArray.map(elem => elem ** 2);
    return squares.reduce((acc, val) => acc + val);
  }

  get squareOfSum() {
    return this.nArray.reduce((acc, val) => acc + val) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
