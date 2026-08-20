class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //n * emptyArray (a - z)
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const arrays = [];

        const maps = new Map();

        for (const s of strs) {
            const array = Array(alphabet.length).fill(0);
            arrays.push(array);
        }

        for (let i = 0; i < strs.length; i++) {
            const s = strs[i];
            const arrayMatch = arrays[i];

            for (const char of s) {
                const ascDiff = char.charCodeAt(0) - "a".charCodeAt(0);

                arrayMatch[ascDiff] += 1;
            }

            const mapKey = arrayMatch.join(",");

            const match = maps.get(mapKey);
            if (match === undefined) {
                maps.set(mapKey, [s]);
            } else {
                maps.set(mapKey, [...match, s])
            }
        }

        const output = [];
        for (const [key, value] of maps.entries()) {
            output.push(value);
        }

        return output;
    }
}