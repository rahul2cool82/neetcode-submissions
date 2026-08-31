class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let k = parseInt(nums.length/3);
        let map = {};

        const arr = []

        for(let i=0; i<nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) +1;
            if(map[nums[i]] > k) {
                arr.push(nums[i])
            }
        }

        return Array.from(new Set(arr))
    }
}
