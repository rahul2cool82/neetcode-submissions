class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let numbers = [];

        for(let i=0; i<operations.length; i++) {
            if(operations[i] == "C") {
                numbers.pop();
            }
            else if(operations[i] == "D") {
                let num1 = numbers[numbers.length - 1];
                numbers.push(num1*2)
            }
            else if(operations[i] == "+") {
                let num1 = numbers[numbers.length - 1] || 0;
                let num2 = numbers[numbers.length - 2] || 0;
                numbers.push(num1+num2)
            }
            else {
                numbers.push(Number(operations[i]))
            }
        }


        return numbers.reduce((p,n) => p+n, 0)

    }
}
