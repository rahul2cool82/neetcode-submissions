class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for(const v of tokens) {
            if(!isSymbol(v)) {
                stack.push(Number(v))
            }
            else {
                const num1 = stack.pop()
                const num2 = stack.pop()

                let val = 0;

                if(v == "+") {
                    val = num1 + num2
                }
                else if(v == "-") {
                    val = num2 - num1
                }
                else if(v == "*") {
                    val = num1 * num2
                }
                else if(v == "/") {
                    val = parseInt(num2 / num1)
                }

                stack.push(Number(val))

            }

        }

        return stack.pop()
    }
}


function isSymbol(str) {
    const symbols = ["+", "-", "*", "/"]
    return !!symbols.includes(str)
}