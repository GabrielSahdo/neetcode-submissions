class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;

        while (l !== r) {
            const lHeight = heights[l];
            const rHeight = heights[r];

            const width = r - l;
            const validHeigth = Math.min(lHeight, rHeight);
            const area = width * validHeigth;

            maxArea = Math.max(maxArea, area);

            if (lHeight < rHeight) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
