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
    const totalLength = [].concat(...this.matrixRows).length;
    const noOfCols = totalLength / this.matrixRows.length;
    let columnsArray = [];
    for (let i = 0; i < noOfCols; i++) {
      this.matrixRows.map(row => {
        columnsArray.push(row[i]);
      });
    }
    let columns = [];
    while (columnsArray.length > 0) {
      columns.push(columnsArray.splice(0, totalLength / noOfCols));
    }
    return columns;
  }
}
