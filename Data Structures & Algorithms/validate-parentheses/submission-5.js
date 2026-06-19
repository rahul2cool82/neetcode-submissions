class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairBrackets = {
            '}' : '{',
            ')' : '(',
            ']' : '[',
        }

        const closeBrackets = {
            '{' : '}',
            '[' : ']',
            '(' : ')',
        }

        const stack = []

        for(const b of s) {
            if(!pairBrackets[b]) {
                stack.push(b)
            }
            else {
                if(stack.length == 0) {
                    return false
                }
                const [unshiftedElement] = stack.pop();
                if(closeBrackets[unshiftedElement] !== b) {
                    return false
                }
            }
        }

        return stack.length == 0

    }
}
