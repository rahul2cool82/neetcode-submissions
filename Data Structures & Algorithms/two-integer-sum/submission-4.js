class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}
        
        for(let i=0; i<nums.length; i++) {
            const sub = target - nums[i];
            if(map[sub]) {
                return [map[sub]-1, i]
            }
            map[nums[i]] = i+1;
        }
        console.log(map)
        return []
    }
}
