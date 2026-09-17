class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        
        const charsMap = new Map();
        for (let i = 0; i < chars.length; i++) {
            charsMap.set(chars[i], i);
        }

        const anagramsMap = new Map();

        for (const str of strs) {
            let countArray = new Array(charsMap.size).fill(0);

            for (let i = 0; i < str.length; i++) {
                const currChar = str[i];

                const alphabetPosition = charsMap.get(currChar.toLocaleLowerCase());

                countArray[alphabetPosition] += 1;
            }

            const key = JSON.stringify(countArray);
            const match = anagramsMap.get(key) ?? [];

            match.push(str);
            anagramsMap.set(key, match);
        }

        return [...anagramsMap.values()]
    }
}
