class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            const diff = target - num;

            const match = hashMap.get(diff);

            if (match !== undefined) {
                console.log("MATCH")
                return [match, i];
            }

            hashMap.set(num, i);
        }
    }
}
