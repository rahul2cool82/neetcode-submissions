class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i=0;
        let j=i+1;

        while(j<nums.length) {
            if(nums[i] !== val) {
                i++;
                j++
            }
            else{
                while(nums[j] == val) {
                    j++;
                }

                if(j < nums.length) {
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                }

                
            }
        }
        

        let count = 0;

        for(let i=0; i<nums.length; i++) {
            if(nums[i] == val) {
                count++;
            }
        }

        console.log(nums)

        return nums.length - count;

    }
}
