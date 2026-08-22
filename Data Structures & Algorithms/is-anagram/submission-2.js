class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        const map = {}
        for(let i=0; i<s.length; i++) {
            map[s.charAt(i)] = (map[s.charAt(i)] || 0) + 1;
            map[t.charAt(i)] = (map[t.charAt(i)] || 0) - 1;
        }

        for(const [key, value] of Object.entries(map)) {
            if(value != 0) {
                return false
            }
        }

        return true

    }
}
