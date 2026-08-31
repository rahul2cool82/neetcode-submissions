class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const threshold = Math.floor(nums.length / 3);
        const map = {};
        const result = [];

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for (const [num, count] of Object.entries(map)) {
            if (count > threshold) {
                result.push(parseInt(num));
            }
        }

        return result;
    }
}
