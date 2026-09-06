class MinStack {
    stack = null;
    minValue = Infinity;
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minVal = Math.min(val, this.minValue)
        const node = new Node(val, minVal)

        if(this.stack == null) {
            this.stack = node;
        }
        else {
            node.setNextNode(this.stack)
            this.stack = node;
        }
        this.minValue = minVal;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack?.getNextNode()) {
            this.stack = this.stack.getNextNode()
            this.minValue = this.stack.getMinVal();
        }
        else {
            this.stack = null;
            this.minValue = Infinity;
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack) {
            return this.stack.value;
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.stack) {
            return this.stack.minValue;
        }
    }
}

class Node {
    nextNode = null;
    value;
    minValue;

    constructor(val, minVal) {
        this.value = val;
        this.minValue = minVal;
    }

    setNextNode(node) {
        this.nextNode = node;
    }

    getNextNode() {
        return this.nextNode;
    }

    getMinVal() {
        return this.minValue;
    }

}

