class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let isBuy = false;
        let buy = 0;
        let profit = 0;


        for(let i=0; i<prices.length; i++) {

            if(isBuy && prices[i] > buy) {
                profit += (prices[i] - buy);
                isBuy = false;
                buy = 0;
            }

            if(prices[i] < prices[i+1]) {
                buy = prices[i];
                isBuy = true;
            }
        }

        return profit

    }
}
