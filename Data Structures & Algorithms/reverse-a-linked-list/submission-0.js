/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        const nodes = []
        while(head) {
            nodes.push(head)
            head = head.next
        }

        for(let i = nodes.length - 1; i>0; i--) {
            nodes[i].next = nodes[i-1]
            nodes[i-1].next = null
        }

        return nodes[nodes.length - 1] ?? null
    }
}
