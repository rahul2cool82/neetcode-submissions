class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        console.log(nums)
        const arr = [];
        nums = nums.sort((a,b) => (a-b))
        for(let i=0; i<nums.length; i++) {
            
            while(nums[i] == nums[i-1]) {
                i++;
            }

            const n1= nums[i]
            let l = i+1;
            let r = nums.length - 1;

            while(l < r) {
                const n2 = nums[l];
                const n3 = nums[r];

                const sum = n1 + n2 + n3;

                if(sum == 0) {
                    arr.push([n1, n2, n3])
                    l++;
                    r--;
                    while(n2 == nums[l] && n3 == nums[r]) {
                        l++;
                        r--;
                    }  
                }
                else if (sum > 0) {
                    r--;
                }
                else {
                    l++;
                }

            } 

        }

        return arr;

    }
}
