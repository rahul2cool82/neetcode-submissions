class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const objGroup: {
            [key: string]: string[]
        } = {}

        for(const str of strs) {
            let val = str.split("").sort().join("")
            if(!objGroup[val]) {
                objGroup[val] = []
            }
            objGroup[val].push(str);
        }

        return [...(Object.values(objGroup))]

    }
}
