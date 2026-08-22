class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const alphabets = "abcdefghijklmnopqrstuvwxyz";
        const alphabetsmap = {

        }

        for(let i=0; i<alphabets.length; i++) {
            alphabetsmap[alphabets[i]] = i;
        }


        const map = {
            /**
             * [sortedstr] = [str1, str2]
             * 
             */
        }

        for(let i=0; i<strs.length; i++) {
            const arrayStr = new Array(26).fill('')

            const str = strs[i]
            for(let j=0; j<str.length; j++) {
                const index = alphabetsmap[str[j]];
                arrayStr[index] = (arrayStr[index] || '') + str[j]
            }

            const sortedStr = arrayStr.filter((s) => !!s).join('')
            if(!map[sortedStr]) {
                map[sortedStr] = []
                
            }
            (map[sortedStr] || []).push(str);
            

        }

        return Object.values(map)


    }
}
