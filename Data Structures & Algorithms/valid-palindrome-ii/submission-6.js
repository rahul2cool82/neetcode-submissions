class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let leftPtr = 0;
        let rightPtr = s.length -1;
        
        while(leftPtr < rightPtr) {

            if(s[leftPtr] == s[rightPtr]) {
                leftPtr++;
                rightPtr--;
                continue;
            }

            return this.isPalindrome(s, leftPtr + 1, rightPtr) || this.isPalindrome(s, leftPtr, rightPtr - 1);


        }

        return true;
    }

    isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
