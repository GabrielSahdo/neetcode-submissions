class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let biggest = 0;

        const buildSetKey = (i, j) => `${i}:${j}`;

        const dfs = (i, j) => {
            visited.add(buildSetKey(i, j));

            const leftSize =
                !visited.has(buildSetKey(i - 1, j)) && i - 1 >= 0 && grid[i - 1][j] === 1
                    ? dfs(i - 1, j)
                    : 0;

            const rightSize =
                !visited.has(buildSetKey(i + 1, j)) && i + 1 < grid.length && grid[i + 1][j] === 1
                    ? dfs(i + 1, j)
                    : 0;

            const upSize =
                !visited.has(buildSetKey(i, j - 1)) && j - 1 >= 0 && grid[i][j - 1] === 1
                    ? dfs(i, j - 1)
                    : 0;

            const downSize =
                !visited.has(buildSetKey(i, j + 1)) && j + 1 < grid[i].length && grid[i][j + 1] === 1
                    ? dfs(i, j + 1)
                    : 0;

            return 1 + downSize + leftSize + rightSize + upSize;
        };

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (visited.has(buildSetKey(i, j)) || grid[i][j] === 0) {
                    continue;
                }

                console.log("entering dfs", { i, j });

                const size = dfs(i, j);

                biggest = Math.max(biggest, size);
            }
        }

        return biggest;
    }
}

/**
 * [
 *  [0,1,1,0,1],
 *  [1,0,1,0,1],
 *  [0,1,1,0,1],
 *  [0,1,0,0,1]
 * ]
 *
 *
 */
