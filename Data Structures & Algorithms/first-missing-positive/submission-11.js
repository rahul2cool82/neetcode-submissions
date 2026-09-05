class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for(let i=0; i<nums.length; i++) {
            if(nums[i] <= 0) {
                nums[i] = nums.length + 1
            }
        }

        // if nums = 0 & nums[0] != 1
        if(nums.length == 0 || (nums.length == 1 && nums[0] != 1)) {
            return 1
        }

        for(let i=0; i<nums.length; i++) {
            const n = (nums[i] < 0 ? -1*nums[i] : nums[i])-1;
            if(n>=nums.length) {
                continue;
            }
            nums[n] = nums[n] > 0 ? -1*nums[n] : nums[n]
        }

        console.log(nums)

        for(let i=0; i<nums.length; i++) {
            if(nums[i] > 0) {
                return i+1;
            }
        }

        return nums.length + 1;

    }
}
