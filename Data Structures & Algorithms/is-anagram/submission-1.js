class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }

        let obj = {}

        for (let i=0; i<s.length; i++) {
            if(!obj[s.charAt(i)]) {
                obj[s.charAt(i)] = 0;
            }
            obj[s.charAt(i)]++;
        }

        for(let j=0; j<t.length; j++) {
            if(!obj[t.charAt(j)]) {
                return false;
            }
            obj[t.charAt(j)]--;
        }

        if(Object.values(obj).find((val) => val != 0)) {
            return false;
        }

        return true;

    }
}
