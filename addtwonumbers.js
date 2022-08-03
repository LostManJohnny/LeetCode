/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	var carry = 0,
		result,
		header = new ListNode(),
		current = header;

	while (l1 || l2 || carry != 0) {
		if (l1 && l2) {
			result = l1.val + l2.val + carry;
			carry = Math.trunc(result / 10);

			current.val = result - carry * 10;
			l1 = l1.next;
			l2 = l2.next;
		} else if (l1) {
			result = l1.val + carry;
			carry = Math.trunc(result / 10);

			current.val = result - carry * 10;
			l1 = l1.next;
		} else if (l2) {
			result = l2.val + carry;
			carry = Math.trunc(result / 10);

			current.val = result - carry * 10;
			l2 = l2.next;
		} else {
			result = carry;
			carry = Math.trunc(result / 10);

			current.val = result - carry * 10;
		}

		if (l1 || l2 || carry != 0) {
			current.next = new ListNode();
			current = current.next;
		}
	}

	return header;
};

var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

// [2,4,3]
// [5,6,4]
