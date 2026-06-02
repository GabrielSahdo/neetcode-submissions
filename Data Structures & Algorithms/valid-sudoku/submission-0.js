class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // validate lines
        for (const line of board) {
            if (!this.isValidLine(line)) return false;
        }

        // valdate the columns
        for (let j = 0; j < board.length; j++) {
            const column = [];

            for (let i = 0; i < board.length; i++) {
                const val = board[i][j];
                column.push(val);
            }

            if (!this.isValidLine(column)) return false;
        }

        // sections
        for (let i = 0; i < board.length; i += 3) {
            for (let j = 0; j < board[i].length; j += 3) {
                const values = this.get3By3(board, i, j);

                if (!this.isValidLine(values)) return false;
            }
        }

        return true;

    }

    /**
     * @param {character[]} line
     * @return {boolean}
     */
    isValidLine(line) {
        const set = new Set();

        for (const item of line) {
            if (!this.isValidChar(item)) return false;

            if (item === ".") continue;

            if (set.has(item)) return false;

            set.add(item);
        }

        return true;
    }

    isValidChar(char) {
        const valid = new Set(['.', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

        return valid.has(char);
    }

    get3By3(board, i, j) {
        return [
            board[i][j], board[i][j+1], board[i][j+2],
            board[i+1][j], board[i+1][j+1], board[i+1][j+2],
            board[i+2][j], board[i+2][j+1], board[i+2][j+2],
        ]
    }
}
