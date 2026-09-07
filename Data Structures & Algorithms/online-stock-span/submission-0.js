class StockSpanner {
    stack = [];

    constructor() {}

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1;

        while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
            // Add their spans to current span
            span += this.stack.pop()[1];
        }
        this.stack.push([price, span]);
        return span;

    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
