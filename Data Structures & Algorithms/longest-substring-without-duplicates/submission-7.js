class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0;
        let j=0;

        let set = new Map();
        let largest = j-i;
        
        while(j < s.length) {
            const char = s.charAt(j);
            if(set.has(char) && set.get(char) >= i) {
                i = set.get(char) + 1;
            }
            set.set(char, j)
            largest = Math.max(largest, j-i+1)
            j++;
        }
        return largest;
    }
}
