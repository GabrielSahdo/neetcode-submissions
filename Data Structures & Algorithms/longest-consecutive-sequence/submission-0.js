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
                console.log("Skipping", { num })
                continue;
            }

            let length = 0;
            let curr = num;

            do {
                console.log("Skipping", { num })


                length++;
                max = Math.max(length, max);
                curr++;
            } while (numsAsSet.has(curr));
        }

        return max;
    }
}
