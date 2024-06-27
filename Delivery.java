/* 
A man delivers parcel in a colony with n-1 houses.
He writes the house numbers from 1 to n-1 on paper. 
At the end of day he saw he delivered n parcel. 
Find the house that he delivered  twice.
*/
import java.util.*;

class Delivery
{
    // Function to find a duplicate element in an array
    public static int findDuplicate(int[] arr){
      for(int i=0;i<arr.length-1;i++)
      {
        int k=arr[i];
        for(int j=i+1;j<arr.length;j++)
        {
          if(k==arr[j])
            return k;
        }
      }
      return -1;
      
    }
 
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
      	int n = sc.nextInt();
      	int arr[] = new int[n];
      	for(int i=0; i<n; i++){
          arr[i] = sc.nextInt();
        }
        System.out.print(findDuplicate(arr));
    }
}