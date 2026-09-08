

class FreqStack {
    map = {}
    stack = [[]]
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const map = this.map;
        const stack = this.stack;

        map[val] = (map[val] || 0) + 1;
        if(map[val] == stack.length) {
            stack.push([])
        }
        stack[map[val]].push(val)
    }

    /**
     * @return {number}
     */
    pop() {
        const map = this.map;
        const stack = this.stack;

        const topStack = stack[stack.length-1];
        const val = topStack.pop();

        map[val] = map[val] - 1;
        if(topStack.length === 0) {
            stack.pop()
        }
        return val
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
