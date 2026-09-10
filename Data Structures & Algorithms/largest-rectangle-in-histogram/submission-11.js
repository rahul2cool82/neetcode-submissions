class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const leftStack = []

        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            const weight = heights[i];
            let start = i;   // leftmost index this bar can extend to

            // Pop taller bars — they can't extend past the current shorter bar
            while (leftStack.length > 0 && leftStack[leftStack.length - 1][1] > weight) {
                const [ti, tw] = leftStack.pop();
                const width = i - ti;                       // right boundary is i
                maxArea = Math.max(maxArea, tw * width);
                start = ti;                                 // inherit left boundary!
            }

            leftStack.push([start, weight]);
        }

        // Close out remaining bars: their right boundary is the end of the array
        for (const [index, height] of leftStack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}
