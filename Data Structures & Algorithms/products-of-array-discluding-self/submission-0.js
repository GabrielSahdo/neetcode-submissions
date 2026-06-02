class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prev = new Array(nums.length).fill(1);
        const post = new Array(nums.length).fill(1);

        let prevAcc = 1;
        let postAcc = 1;

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            prevAcc = prevAcc * val;
            prev[i] = prevAcc;
        }

        for (let i = nums.length - 1; i >= 0 ; i--) {
            const val = nums[i];
            postAcc = postAcc * val;
            post[i] = postAcc;
        }

        const output = [];

        for (let i = 0; i < nums.length; i++) {
            const prevValue = i === 0 ? 1 : prev[i - 1];
            const postValue = i === nums.length - 1 ? 1 : post[i + 1];

            output.push(prevValue * postValue);
        }

        return output;
    }
}
