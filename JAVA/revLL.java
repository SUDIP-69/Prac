//WAP to reverse a linked list 
public class revLL {
    public static void main(String args[])
    {
        int[] a={1,2,3,4,5};
        ListNode l = LL.create(a);
        LL.display(l);
        ListNode next = null;
        ListNode prev = null;
        ListNode curr = l;

        while(curr.next!=null)
        {
            next=curr.next;
            curr.next = prev;
            prev=curr;
            curr=next;
        }

        curr.next=prev;
        
        LL.display(curr);        
    }   
}
