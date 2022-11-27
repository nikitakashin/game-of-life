// configs
const x = 5;
const y = 5;

export class GameField {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.field = [];
  }

  createGameFieldArray() {
    let field = [];

    for (let i = 0; i <= x; i++) {
      let row = [];
      for (let j = 0; j <= y; j++) {
        row.push(0);
      }

      field.push(row);
    }

    this.field = field;
  }

  setByCoords(x, y) {
    this.field[y][x] = Number(!this.field[y][x]);
  }

  start() {
    setInterval(() => {
      for (let i = 0; i < this.field.length; i++) {
        if (this.field[i]) {
          for (let j = 0; j < this.field[i].length; j++) {
            const neighbors = this.countNeighbors(i, j);
            let elem = this.field[i][j];

            if (elem) {
              if (neighbors < 2 || neighbors > 3) {
                this.setByCoords(i, j);
              }
            } else {
              if (neighbors === 3) {
                this.setByCoords(i, j);
              }
            }
          }
        }
      }
    }, 1000);
  }

  countNeighbors(enterX, enterY) {
    let neighbors = 0;

    let elem = this.field[enterY][enterX];

    for (let i = enterY - 1; i <= enterY + 1; i++) {
      for (let j = enterX - 1; j <= enterX + 1; j++) {
        let trueX = j;
        let trueY = i;
        if (trueY < 0) trueY = y;
        if (trueX < 0) trueX = x;

        if (trueY > y) trueY = 0;
        if (trueX > x) trueX = 0;

        if (this.field[trueY][trueX]) {
          neighbors += 1;
        }
      }
    }

    return elem ? neighbors - 1 : neighbors;
  }
}
