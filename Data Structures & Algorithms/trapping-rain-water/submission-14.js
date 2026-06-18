class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftArray = new Array(height.length).fill(0)
        let maxLeft = 0;
        let rightArray = new Array(height.length).fill(0)
        let maxRight = 0;
        let totalWaterCollected = 0;

        for(let i=0; i<height.length; i++) {
            let j = height.length - i - 1;
            maxLeft = Math.max(maxLeft, height[i])
            leftArray[i] = maxLeft;

            maxRight = Math.max(maxRight, height[j])
            rightArray[j] = maxRight;
        }

        for(let i=0; i<height.length; i++) {
            totalWaterCollected += (Math.min(leftArray[i], rightArray[i]) - height[i])
        }

        return totalWaterCollected;

    }
}
