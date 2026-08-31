class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxNumber = 0;
        for (const n of set) {
            if(!set.has(n-1)) {
                let length = 1;
                while (set.has(n + length)) {
                    length++;
                }
                maxNumber = Math.max(maxNumber, length);
            }
        }

        return maxNumber

    }
}
