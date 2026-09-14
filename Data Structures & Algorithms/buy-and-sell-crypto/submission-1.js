class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = prices[0];
        let min = prices[0];

        let maxProfit = 0;

        for(let i=1; i<prices.length; i++) {
            if(prices[i] < min) {
                maxProfit = Math.max(maxProfit, max-min);
                min = prices[i]
                max = 0;
            }
            else if(prices[i] > max) {
                max = prices[i];
                maxProfit = Math.max(maxProfit, max-min);
            }
        }

        return maxProfit;

    }
}
