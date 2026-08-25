class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 1;
        let right = numbers.length;

        while (left < right) {
            const currSum = numbers[left-1] + numbers[right-1];

            if (currSum > target) {
                right--;
                continue;
            }

            if (currSum < target) {
                left++;
                continue;
            }

            return [left, right];

        }
    }
}
