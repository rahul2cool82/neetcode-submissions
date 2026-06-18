class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let leftMax = 0;

        let right = height.length - 1;
        let rightMax = 0;
        let totalWaterCollected = 0;

        while(left < right) {
            if(height[left] < height[right]) {
                if(height[left] >= leftMax) {
                    leftMax = height[left]
                }else{
                    totalWaterCollected += leftMax - height[left];
                }
                left++;
            }
            else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWaterCollected += rightMax - height[right];
                }
                right--;
            }
        }

        

        return totalWaterCollected;

    }
}
