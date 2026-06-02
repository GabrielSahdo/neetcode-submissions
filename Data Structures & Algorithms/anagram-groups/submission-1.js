class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (const s of strs) {
            const chars = new Array(26).fill(0);

            for (const char of s) {
                const charCode = char.charCodeAt(0) - "a".charCodeAt(0);

                chars[charCode] += 1;
            }

            const arrayStringfied = chars.toString();

            const match = groups.get(arrayStringfied);

            if (!match) {
                groups.set(arrayStringfied, [s]);
            } else {
                groups.set(arrayStringfied, [...match, s]);
            }
        }

        return [...groups.values()];
    }
}
