class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let wordArr = []

        let ptr = 0;

        while(ptr < word1.length || ptr < word2.length) {
            if(ptr < word1.length) {
                wordArr.push(word1[ptr])
            }

            if(ptr < word2.length) {
                wordArr.push(word2[ptr])
            }
            ptr++;
        }

        return wordArr.join("")
    }
}
