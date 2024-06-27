/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

public class add_2_num_LL {      

    public ListNode addTwoNumbers(ListNode p, ListNode q) {
        ListNode head = new ListNode(0);
        ListNode curr = head;
        int carry = 0;
        
        while (p != null || q != null) {
            int x = (p != null) ? p.val : 0;
            int y = (q != null) ? q.val : 0;
            int sum = carry + x + y;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            
            if (p != null) p = p.next;
            if (q != null) q = q.next;
        }
        
        if (carry > 0) {
            curr.next = new ListNode(carry);
        }
        
        return head.next;
    }

    public static void main(String[] args) {
        add_2_num_LL solution = new add_2_num_LL();
        
        // Example usage:
        int[] num1 = {7, 4, 3}; // represents 342
        int[] num2 = {5, 1, 4}; // represents 465
        
        ListNode l1 = LL.create(num1);
        ListNode l2 = LL.create(num2);
        
        ListNode result = solution.addTwoNumbers(l1, l2);
        LL.display(result);
    }
}
