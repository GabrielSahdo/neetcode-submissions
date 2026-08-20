class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map();
        const mapT = new Map();

        for (let charS of s) {
            const target = mapS.get(charS);

            if (!target) {
                mapS.set(charS, 1);
            } else {
                mapS.set(charS, target + 1);
            }
        }

        for (let charT of t) {
            const target = mapT.get(charT);

            if (!target) {
                mapT.set(charT, 1);
            } else {
                mapT.set(charT, target + 1);
            }
        }

        // O(m) -> m -> size of the map
        for (const [keyS, valueS] of mapS.entries()) {
            const match = mapT.get(keyS);

            if (!match) {
                return false;
            }

            if (match !== valueS) {
                return false;
            }

            mapT.delete(keyS);
        }

        return mapT.size === 0;
    }
}
