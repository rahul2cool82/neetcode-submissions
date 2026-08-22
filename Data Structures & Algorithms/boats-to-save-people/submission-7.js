class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a,b) => (a-b));

        let n = 0;

        let l=0;
        let r=people.length -1;

        while(l<=r) {
            const totalWeight = people[l] + people[r];
            
            
            if(l == r) {
                n++;
                l++;
            }
            else if(people[r] == limit) {
                n++;
                r--;
            }
            else if(totalWeight > limit) {
                if(people[r] < limit) {
                    n++
                }
                
                r--;
            }
            else if(totalWeight <= limit) {
                l++;
                r--;
                n++;
            }
            else {
                l++;
            }
        }

        return n

    }
}
