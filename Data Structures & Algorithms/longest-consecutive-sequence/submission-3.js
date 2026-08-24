class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;

        const numSet = new Set(nums);

        for (const num of nums) {
            const prev = num - 1;

            if (numSet.has(prev))
                continue;

            let currLength = 0;
            while (numSet.has(num + currLength)) {
                currLength++;
            }

            longest = Math.max(longest, currLength);

        }

        return longest;
    }
}
