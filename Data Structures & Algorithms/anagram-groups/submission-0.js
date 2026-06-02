class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /** @type {Array<AnagramGroup>} */
        const groups = [];

        for (const str of strs) {
            console.log(str);

            let foundAnagram = false;

            // 1. verify if is within a anagram
            for (const anagramGroup of groups) {
                if (anagramGroup.isAnagram(str)) {
                    anagramGroup.addAnagram(str);
                    foundAnagram = true;
                    break;
                }
            }

            if (foundAnagram === true) continue;

            // 2. else, create a new anagram
            const anagramGroup = AnagramGroup.init(str);
            groups.push(anagramGroup);
        }

        return groups.map((group) => group.anagrams);
    }
}

class AnagramGroup {
    size;
    characters;
    anagrams;

    constructor(size, characters) {
        this.size = size;
        this.characters = characters;
        this.anagrams = [];
    }

    static init(str) {
        const charactersMap = new Map();

        for (const char of str) {
            const match = charactersMap.get(char);

            if (!match) {
                charactersMap.set(char, 1);
                continue;
            }

            charactersMap.set(char, match + 1);
        }

        const anagram = new AnagramGroup(str.length, charactersMap);

        anagram.addAnagram(str);

        return anagram;
    }

    addAnagram(str) {
        this.anagrams.push(str);
    }

    isAnagram(str) {
        if (str.length !== this.size) return false;

        const copy = new Map(this.characters);

        for (const char of str) {

            const occurrencies = copy.get(char);

            if (!occurrencies) {
                return false;
            }

            const newValue = occurrencies - 1;
            
            newValue === 0
                ? copy.delete(char)
                : copy.set(char, newValue)
        }

        return copy.size === 0
    }
}
