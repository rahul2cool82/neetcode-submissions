class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let map = new Map();
        let currentSum = 0;

        map.set(currentSum, 1);

        for(const num of nums) {
            currentSum += num;
            const diff = currentSum - k;
            count += (map.get(diff) || 0)
            map.set(currentSum, (map.get(currentSum) || 0) +1)
        }

        return count;

    }
}
