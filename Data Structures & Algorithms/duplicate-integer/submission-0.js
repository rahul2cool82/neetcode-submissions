class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsObj = {}
        for (let num of nums) {
            if(!numsObj[num]) {
                numsObj[num] = 0;
            }
            numsObj[num]++
            if (numsObj[num] >= 2) {
                return true;
            }
        }
        return false;
    }
}
