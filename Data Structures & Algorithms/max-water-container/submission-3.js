class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            maxArea = Math.max(Math.min(heights[left], heights[right]) * (right - left), maxArea);
            if(heights[left] < heights[right]) {
                left++;
            }else {
                right--;
            }
        }

        return maxArea;
    }
}
