class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const matchedIndexes = new Set();

        if (s.length !== t.length) {
            return false;
        }

        const hashMapCounter = new Map();

        for (let i = 0; i < s.length; i++) {
            const found = hashMapCounter.get(s[i]) ?? 0;

            hashMapCounter.set(s[i], found + 1);
        }

        console.log(hashMapCounter)

        for (let j = 0; j < t.length; j++) {
            const match = hashMapCounter.get(t[j]);

            if (!match) {
                return false;
            }

            const newValue = match - 1;

            newValue === 0
                ? hashMapCounter.delete(t[j])
                : hashMapCounter.set(t[j], newValue)
        }

        console.log(hashMapCounter)

        return (hashMapCounter.size === 0) ? true : false;
    }
}
