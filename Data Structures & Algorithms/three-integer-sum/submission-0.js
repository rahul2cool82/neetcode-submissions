class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)

        const triplets = []

        for(let i=0; i<nums.length; i++) {

            // avoid duplicates
            if(i>0 && nums[i] == nums[i-1]) {
                continue;
            }

            let left = i+1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[i] + nums[left] + nums[right]
                if(
                    // nums[left] != nums[right] &&
                    total == 0
                ) {
                    triplets.push([nums[i], nums[left], nums[right]])
                    left++;
                    right--;

                    
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                }
                
                else if(total > 0) {
                    right--;
                }
                else {
                    left++;
                }

            }

        }

        return triplets

    }
}
