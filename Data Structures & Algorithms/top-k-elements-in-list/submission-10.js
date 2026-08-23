class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        for(const n of nums) {
            map[n] = (map[n] || 0) + 1;
        }

        return Object.entries(map).sort((a, b) => b[1] - a[1]).map((val) => Number(val[0])).slice(0,k)

    }
}
