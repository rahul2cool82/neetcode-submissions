class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = []

        for(const asteriod of asteroids) {
            if(stack.length == 0) {
                stack.push(asteriod)
            }
            else {
                const isPositive = asteriod > 0;
                let isDestroyed = false;

                while(stack.length && (stack[stack.length - 1] > 0 && !isPositive)) {
                    const asteriodVal = asteriod > 0 ? asteriod : -1*asteriod;
                    const topStackVal = stack[stack.length - 1] > 0 ? stack[stack.length - 1] : -1*stack[stack.length - 1];

                    if(asteriodVal > topStackVal) {
                        stack.pop()
                    }
                    else if (asteriodVal == topStackVal) {
                        stack.pop()
                        isDestroyed = true;
                        break;
                    }
                    else {
                        isDestroyed = true;
                        break;
                    }

                }

                if(!isDestroyed) {
                    stack.push(asteriod)
                }

            }
        }

        return stack

    }
}
