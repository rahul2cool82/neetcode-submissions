class MinStack {

    startNode = null;

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const newNode = new Node(val);
        if(this.startNode) {
            newNode.setNextNode(this.startNode)
        }
        this.startNode = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.startNode) {
            this.startNode = this.startNode.getNextNode()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.startNode.getValue()
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.startNode.getMinNum()
    }
}

class Node {
    minNum = Infinity;
    nextNode = null;
    value = 0;

    constructor(val) {
        this.value = val;
        this.minNum = val;
    }

    setNextNode(node) {
        this.nextNode = node;
        this.minNum = Math.min(node.getMinNum(), this.value)
    }

    getNextNode() {
        return this.nextNode
    }

    getMinNum() {
        return this.minNum
    }

    getValue() {
        return this.value
    }

}
