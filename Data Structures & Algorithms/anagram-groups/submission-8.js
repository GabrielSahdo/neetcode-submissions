class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const stringMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const s = strs[i];
            const array = Array(26).fill(0);

            for (const char of s) {
                const ascDiff = char.charCodeAt(0) - "a".charCodeAt(0);

                array[ascDiff] += 1;
            }

            const mapKey = array.join(",");

            const match = stringMap.get(mapKey);
            if (match === undefined) {
                stringMap.set(mapKey, [s]);
            } else {
                stringMap.set(mapKey, [...match, s])
            }
        }

        const output = [];
        for (const [key, value] of stringMap.entries()) {
            output.push(value);
        }

        return output;
    }
}