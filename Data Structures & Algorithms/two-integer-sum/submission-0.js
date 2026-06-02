class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /**
         * 1. build a hash map with each value as keys and the indexes as values
         * 2. iterate through the array
         * 3. subtract value with the target
         * 4. given the result, verify if it exists in the map
         */

        const numbersMap = new Map();

        for (let index = 0; index < nums.length; index++) {
            const number = nums[index];
            const mapVal = numbersMap.get(number) ?? new Set();

            mapVal.add(index);
            numbersMap.set(number, mapVal);
        }

        let hasPair = false;

        for (let index = 0; index < nums.length; index++) {
            const number = nums[index];
            const diff = target - number;
            const match = numbersMap.get(diff);

            if (!match) {
                continue;
            }

            for (const val of match) {
                if (val !== index) {
                    return [Math.min(index, val), Math.max(index, val)]
                }     
            }
        }

        return [];
    }
}
