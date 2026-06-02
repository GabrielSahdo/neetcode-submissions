class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const occur = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count.set(n, 1 + (count.get(n) ?? 0));
        }

        for (const [n, c] of count.entries()) {
            occur[c].push(n)
        }

        const response = [];

        for (let i = occur.length - 1; i >= 0; i--) {
            for (const number of occur[i]) {
                response.push(number);

                if (response.length === k) return response;
            }
        }

        return response;
    }
}
