export class Matrix {
  constructor(matrix) {
    this.matrixRows = matrix
      .split('\n')
      .map(row => row.split(' ').map(elem => parseInt(elem)));
  }

  get rows() {
    return this.matrixRows;
  }

  get columns() {
    const noOfCols = this.matrixRows[0].length;
    const columnsArray = [];
    for (let i = 0; i < noOfCols; i++) {
      const column = this.matrixRows.map(row => row[i]);
      columnsArray.push(column);
    }
    return columnsArray;
  }
}
