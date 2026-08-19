class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums = nums.sort((a,b) => a-b);

        let arr = []
        console.log(nums)
        for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {continue; } // Skip duplicates for i
        
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]){ continue; } // Skip duplicates 

                const n1 = nums[i]
                const n2 = nums[j]

                let left = j+1;
                let right = nums.length - 1;

                let itr = 0
                while(left < right) {
                    itr++
                    const n3 = nums[left];
                    const n4 = nums[right];

                    const sum = n1+n2+n3+n4
                    console.log({left,right,i,j,sum,target,n1,n2,n3,n4})
                    if(sum == target) {
                        const sumArray = [n1,n2,n3,n4]
                        const isExists = arr.find((a) => a.toString() == sumArray.toString())

                        if(!isExists) {
                            arr.push(sumArray)
                        }
                        left++
                        right--

                         while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                    }
                    else if (sum > target){
                        right--
                    }
                    else {
                        left++
                    }
                    
                    //if(itr == 4) break;

                }
                

            }
        }

        return arr

    }
}
