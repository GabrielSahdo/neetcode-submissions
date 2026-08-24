class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

        let first = 0;
        let second = s.length - 1;

        while (first < second) {
            const firstEl = s[first];
            const secondEl = s[second];

            if (!valid.includes(firstEl)) {
                first++;
                continue;
            }

            if (!valid.includes(secondEl)) {
                second--;
                continue;
            }

            if (firstEl.toLocaleLowerCase() !== secondEl.toLocaleLowerCase()) return false;

            first++;
            second--;
        }

        return true;
    }
}
