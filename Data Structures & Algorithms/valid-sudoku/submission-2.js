class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const colums = new Map();
        const squares = new Map();

        for (let i = 0; i < 9; i++) {
            rows.set(i, new Set());
            colums.set(i, new Set());
        }

        squares.set("0,0", new Set());
        squares.set("0,1", new Set());
        squares.set("0,2", new Set());

        squares.set("1,0", new Set());
        squares.set("1,1", new Set());
        squares.set("1,2", new Set());

        squares.set("2,0", new Set());
        squares.set("2,1", new Set());
        squares.set("2,2", new Set());

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board.length; c++) {
                const item = board[r][c];

                if (item === ".") continue;

                const rowItems = rows.get(r);
                const columnItems = colums.get(c);

                const key = String(Math.floor(r/3) + "," + Math.floor(c/3));
                const squareItems = squares.get(key);

                if (rowItems.has(item) || columnItems.has(item) || squareItems.has(item)) return false;

                rowItems.add(item);
                columnItems.add(item);
                squareItems.add(item);
            }
        }

        return true;
    }
}
