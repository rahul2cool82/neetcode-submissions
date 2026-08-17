class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftPtr = 0;
        let rightPtr = numbers.length - 1;

        while(leftPtr <= rightPtr) {
            if(numbers[leftPtr] + numbers[rightPtr] == target) {
                return [leftPtr+1, rightPtr+1]
            }
            else if (numbers[leftPtr] + numbers[rightPtr] > target) {
                rightPtr--;
            }else{
                leftPtr++
            }
        }

        return []

    }
}
