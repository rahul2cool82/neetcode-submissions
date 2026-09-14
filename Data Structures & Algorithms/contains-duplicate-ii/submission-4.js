class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = {}

        for(let i=0; i<k; i++) {
            let num = nums[i];
            map[num] = (map[num] || 0) +1;
            if(map[num] >= 2) {
                return true;
            }
        }


        for(let i=0; i<nums.length - k; i++) {
            let num = nums[i];
            let kNum = nums[i+k];
            map[kNum] = (map[kNum] || 0) +1;
            if(map[num] >= 2) {
                return true;
            }
            map[num] = (map[num] || 0) -1;
        }
        return false
    }
}
