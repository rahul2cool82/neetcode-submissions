class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(let i=0; i<tokens.length; i++) {
            const tok = tokens[i];

            if(Number(tok) >= -200 && Number(tok) <= 200) {
                stack.push(Number(tok))
                continue;
            }

            const num1 = stack.pop()
            const num2 = stack.pop()


            if(tok == "+") {
                stack.push(parseInt(num1 + num2))
            }
            else if(tok == "-") {
                stack.push(parseInt(num2 - num1))
            }
            else if(tok == "*") {
                stack.push(parseInt(num2 * num1))
            }
            else if(tok == "/") {
                stack.push(parseInt(num2 / num1))
            }

        }

        return stack[0]

    }
}
