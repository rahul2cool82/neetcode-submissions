class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(str) {
        let output = []
        const stack = []

        let tempStr = ""

        for(const s of str) {
            if(s == "[") {
                stack.push(tempStr)
                tempStr = "";
                continue;
            }
            else if(s == "]") {
                // stack.pop = a3 , tempStr = b, 
                let temp = ""
                const top = stack.pop()
                let currentNum = "";

                for(let i=0; i<top.length; i++) {
                    let ts = top[i];
                    if(parseInt(ts) >= 0) {
                        currentNum += ts;
                        
                    }else{
                        temp+=ts;
                    }
                }

                temp+=(new Array(parseInt(currentNum || "0")).fill(tempStr).join(""))



                if(stack.length >= 1) {
                    tempStr = temp;
                }else{
                    output.push(temp);
                    tempStr = ""
                }
            }
            else {
                tempStr += s;
            }

        }
        output.push(tempStr)

        return output.join("")

    }
}
