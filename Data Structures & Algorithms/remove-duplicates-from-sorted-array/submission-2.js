class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let leftPtr = 0;
        let rightPtr = 1;

        let popCount = 0;

        while(rightPtr<nums.length) {
            popCount++;
            if(nums[leftPtr] != nums[rightPtr]) {
                leftPtr++;
                nums[leftPtr] = nums[rightPtr];
                popCount--;
            }
            rightPtr++;
        }

        return nums.length - popCount
    }
}
