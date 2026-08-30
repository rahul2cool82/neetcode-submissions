class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encoded = Buffer.from(JSON.stringify(strs), 'utf8').toString('base64')
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = Buffer.from(str, 'base64').toString('utf8')
        return JSON.parse(decoded)

    }
}
