class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            const match = map.get(num);

            if (match === undefined) {
                map.set(num, 1);
            } else {
                map.set(num, match + 1);
            }
        }

        const arr = Array(nums.length);

        for (const [key, value] of map.entries()) {
            if (!arr[value]) {
                arr[value] = [];
            }


            arr[value].push(key);
        }

        const topK = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            if (!arr[i]) continue;

            for (const val of arr[i]) {
                topK.push(val);

                if (topK.length === k) {
                    return topK;
                }
            }
        }

        return topK;
    }
}
