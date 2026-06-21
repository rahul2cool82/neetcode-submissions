class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const res = new Array(temperatures.length).fill(0)

        for(let i=0; i<temperatures.length; i++) {
            while(stack.length > 0 && stack[stack.length - 1].value < temperatures[i]) {
                const {index, value} = stack.pop();
                res[index] = i - index;
            }
            stack.push({index: i, value: temperatures[i]})
        }

        return res;
    }
}
