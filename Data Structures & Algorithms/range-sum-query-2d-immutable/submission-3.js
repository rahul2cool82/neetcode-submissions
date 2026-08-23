class NumMatrix {
    matrix = []
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {

        for(let i=0; i<matrix.length; i++) {
            const row = matrix[i]
            for(let j=1; j<row.length; j++) {
                row[j] = row[j] + row[j-1];
            }
        }

        for(let i=1; i<matrix.length; i++) {
            const row = matrix[i]
            for(let j=0; j<row.length; j++) {
                row[j] = row[j] + matrix[i-1][j];
            }
        }

        this.matrix = matrix
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const bottomRight = this.matrix[row2][col2];
        const bottomLeft = col1 == 0 ? 0 : this.matrix[row2][col1-1];
        const topRight = row1 == 0 ? 0 : this.matrix[row1-1][col2];
        const topLeft = row1 == 0 || col1 == 0 ? 0 : this.matrix[row1-1][col1 - 1];

        return (bottomRight - bottomLeft - topRight + topLeft)

    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
