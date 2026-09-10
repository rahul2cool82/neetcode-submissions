class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const leftSmallerStack = [] // pair: (index, height)
        const rightSmallerStack = [] // pair: (index, height)

        const leftSmaller = new Array(heights.length).fill(-1)
        const rightSmaller = new Array(heights.length).fill(-1)


        for(let i=0; i<heights.length; i++) {
            const height = heights[i];
            while(leftSmallerStack.length > 0 && leftSmallerStack[leftSmallerStack.length - 1][1] >= height) {
                leftSmallerStack.pop();
            }

             if (leftSmallerStack.length > 0) {
                const [prevIndex, prevHeight] = leftSmallerStack[leftSmallerStack.length - 1];
                leftSmaller[i] = i - prevIndex; // Or store the distance: (i - prevIndex)
            }

            leftSmallerStack.push([i, heights[i]])
        }

        for(let i=heights.length-1; i>=0; i--) {
            const height = heights[i];
            while(rightSmallerStack.length > 0 && rightSmallerStack[rightSmallerStack.length - 1][1] >= height) {
                rightSmallerStack.pop();
            }

             if (rightSmallerStack.length > 0) {
                const [prevIndex, prevHeight] = rightSmallerStack[rightSmallerStack.length - 1];
                rightSmaller[i] = prevIndex - i; // Or store the distance: (i - prevIndex)
            }

            rightSmallerStack.push([i, heights[i]])
        }

        let maxArea = 0;

        for(let i=0; i<heights.length; i++) {
            const leftDistance = leftSmaller[i] !== -1 ? leftSmaller[i] : i + 1;
            
            // If rightSmaller[i] is -1, no smaller element exists to the right.
            // The boundary extends past the last index, making the right distance (heights.length - i).
            const rightDistance = rightSmaller[i] !== -1 ? rightSmaller[i] : heights.length - i;
            
            // Total width is the sum of both distances minus 1 (because the current bar is counted twice)
            const width = leftDistance + rightDistance - 1;
            
            // Calculate area and update maxArea
            const currentArea = width * heights[i];
            maxArea = Math.max(maxArea, currentArea);
        }

        return maxArea;

    }
}
