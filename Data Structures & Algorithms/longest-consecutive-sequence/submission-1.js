class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsAsSet = new Set(nums);
        let max = 0;

        for (const num of nums) {
            // Not a start of sequence
            if (numsAsSet.has(num - 1)) {
                continue;
            }

            let length = 0;
            let curr = num;

            do {
                length++;
                max = Math.max(length, max);
                curr++;
            } while (numsAsSet.has(curr));
        }

        return max;
    }
}
