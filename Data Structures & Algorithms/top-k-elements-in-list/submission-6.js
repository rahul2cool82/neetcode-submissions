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

        const frequentSort = Object.entries(map).sort((a, b) => b[1] - a[1]).map((v) => v[0]);
        return frequentSort.slice(0, k)
    }
}
