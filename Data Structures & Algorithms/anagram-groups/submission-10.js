class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        const alphabetSize = chars.length;
        
        const map = new Map();

        for (const str of strs) {

            let countArray = new Array(alphabetSize).fill(0);

            for (let i = 0; i < str.length; i++) {
                const currChar = str[i];

                const alphabetPosition = chars.indexOf(currChar.toLocaleLowerCase());

                countArray[alphabetPosition] += 1;
            }

            const key = JSON.stringify(countArray);
            const match = map.get(key) ?? [];

            match.push(str);
            map.set(key, match);
        }

        return [...map.values()]
    }
}
