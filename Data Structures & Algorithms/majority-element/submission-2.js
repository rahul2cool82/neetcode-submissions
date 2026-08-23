class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majorityNumber = nums[0];
        const map = {[majorityNumber]: 1}

        for(let i=1; i<nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
            majorityNumber = map[majorityNumber] > map[nums[i]] ? majorityNumber : nums[i];
        }

        return majorityNumber

    }
}
