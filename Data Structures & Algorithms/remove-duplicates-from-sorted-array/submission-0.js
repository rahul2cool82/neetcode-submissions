class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let leftPtr = 0;
        let rightPtr = 1;

        let popCount = 0;

        for(let i=rightPtr; rightPtr<nums.length; ) {
            popCount++;
            if(nums[leftPtr] != nums[rightPtr]) {
                leftPtr++;
                nums[leftPtr] = nums[rightPtr];
                popCount--;
            }
            rightPtr++;
        }

        while(popCount !== 0) {
            popCount--;
            nums.pop()
        }

        return nums.length
    }
}
