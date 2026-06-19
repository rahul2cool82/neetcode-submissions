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
            if (pairBrackets[b]) {  // If it's a closing bracket
                if (stack[stack.length - 1] === pairBrackets[b]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {  // Opening bracket
                stack.push(b);
            }
        }

        return stack.length == 0

    }
}
