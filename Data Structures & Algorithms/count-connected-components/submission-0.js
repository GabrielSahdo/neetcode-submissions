class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const visited = new Set();
        let connectedCount = 0;

        const dfs = (element) => {
            visited.add(element);

            for (let j = 0; j < edges.length; j++) {

                const [edgeA, edgeB] = edges[j];

                if (edgeA === element && !visited.has(edgeB)) {
                    dfs(edgeB);
                    continue;
                }

                if (edgeB === element && !visited.has(edgeA)) {
                    dfs(edgeA);
                    continue;
                }
            }
        };

        for (let element = 0; element < n; element++) {

            if (visited.has(element)) {
                continue;
            }

            connectedCount++;
            dfs(element);
        }

        return connectedCount;
    }
}
