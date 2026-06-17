class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanText = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reverseText = cleanText.split('').reverse().join('')
        console.log({cleanText, reverseText})
        return cleanText == reverseText
    }
}
