class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, i) => [p, speed[i]])
        pairs.sort((a, b) => b[0] - a[0])
        
        const stack = []

        for(const [index, [distance, speed]] of Object.entries(pairs)) {
            const time = (target-distance)/speed;
            
            if(stack.length == 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }

        }

        return stack.length

    }
}
