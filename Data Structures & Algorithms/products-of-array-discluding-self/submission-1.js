class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length);
        let prefix = 1;
        let postfix = 1;

        // First pass: fill result with prefix products (left side)
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        // result = [1,1,2,8]
        // prefix = 48

        // Second pass: multiply by postfix products (right side)
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        // result = [48,24,12,8]

        return result;
    }
}
