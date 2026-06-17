class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let maxCount = 0;

        for(const n of numSet) {
            
            if(!numSet.has(n-1)) {
                let length = 1;
                while(numSet.has(n + length)) {
                    length++;
                    
                }
                maxCount = Math.max(length, maxCount);
            }
        }

        return maxCount;

    }
}
