/* Given an array of size n+1 with elements from 1 to n, find the duplicate (only one duplicate exists).*/

public class duplicate_in_array {

    public static int duplicate(int[] arr)
    {
        int slow = arr[0], fast=arr[0];

        do{
            slow = arr[slow];
            fast = arr[arr[fast]];
        }while(slow!=fast);

        fast=arr[0];
        while(slow!=fast)
        {
            slow=arr[slow];
            fast=arr[fast];
        }

        return slow;
    }
    public static void main(String[] args) {
        int[] arr = {3,0,1,4,3};
        System.out.println(duplicate(arr));
    }
}