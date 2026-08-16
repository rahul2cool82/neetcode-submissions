class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let mainPtr = nums1.length - 1;
        let rightPtr = m-1;

        while(mainPtr >= 0) {
            if((n >= 0 && nums2[n-1] > nums1[rightPtr]) || rightPtr < 0) {
                nums1[mainPtr] = nums2[n-1];
                n--;
            }
            else{
                nums1[mainPtr] = nums1[rightPtr];
                rightPtr--;
            }
            mainPtr--;
        }

    }
}
