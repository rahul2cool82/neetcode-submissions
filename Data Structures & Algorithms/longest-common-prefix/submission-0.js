class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        let prefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            let str = strs[i];
            for(let j=0; j<prefix.length; j++) {
                if(str[j] != prefix[j]) {
                    prefix = String(prefix || '').substring(0,j);
                    if(prefix == "") {
                        return ""
                    }
                    break;
                }

            }
        }

        return prefix;

    }
}
