class MyHashSet {
    map = {}
    constructor() {}

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.map[key] = 1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.map[key]
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return !!this.map[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
