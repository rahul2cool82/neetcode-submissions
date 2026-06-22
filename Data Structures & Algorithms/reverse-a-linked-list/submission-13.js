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
        let previousNode = null
        let currentNode = head;

        while(currentNode) {
            const next = currentNode.next;
            currentNode.next = previousNode
            previousNode = currentNode;
            currentNode = next;
        }

        return previousNode
    }
}
