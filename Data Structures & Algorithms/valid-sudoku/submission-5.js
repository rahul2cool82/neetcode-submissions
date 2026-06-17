class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const columns = new Map();
        const squares = new Map();

        for(let i=0; i<board.length; i++) {
            for(let j=0; j<board[i].length; j++) {
                const cell = board[i][j];

                if(cell == ".") {
                    continue;
                }
                
                const boxIndex = (Math.floor(i/3) * 3) + Math.floor(j/3);

                if(rows.get(i)?.has(cell)) {
                    return false;
                }

                if(columns.get(j)?.has(cell)) {
                    return false;
                }

                if(squares.get(boxIndex)?.has(cell)) {
                    return false;
                }

                rows.set(i, new Set(rows.get(i)).add(cell));

                columns.set(j, new Set(columns.get(j)).add(cell));

                squares.set(boxIndex, new Set(squares.get(boxIndex)).add(cell))
            }
        }

        return true;
    }
}
