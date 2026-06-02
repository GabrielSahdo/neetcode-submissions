class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const visited = new Set();

        for (let i = 0; i < nums.length; i++) {
            const el = nums[i];

            if (visited.has(el)) {
                return true;
            }

            visited.add(el);
        }

        return false;
    }
}
