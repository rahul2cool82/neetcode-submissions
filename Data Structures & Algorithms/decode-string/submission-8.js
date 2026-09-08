class Solution {
    decodeString(s) {
        const stringStack = [];
        const countStack = [];
        let cur = '';
        let k = 0;

        for (const c of s) {
            if (c >= '0' && c <= '9') {
                k = k * 10 + Number(c);  // handle multi-digit numbers
            } 
            else if (c === '[') {
                stringStack.push(cur);   // save current result
                countStack.push(k);      // save the multiplier
                cur = '';                // reset for content inside brackets
                k = 0;                   // reset number
            } 
            else if (c === ']') {
                const prev = stringStack.pop();
                const count = countStack.pop();
                cur = prev + cur.repeat(count);  // repeat and prepend previous
            } 
            else {
                cur += c;  // normal character
            }
        }
        return cur;
    }
}
