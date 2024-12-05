/*
 Given a seating arrangement list in which 0 means empty, 1 means taken and 2 means reserved. Your task is to rearrange the seating arrangement separate empty seat, taken seat and reserved seat and print all empty seat value (0) followed by all taken value (1) then reserved seat value (2) in separate lines in linear time and using constant space.
 */
import java.util.*;
 
class Seating {
    // Linear time partition routine to sort an array containing 0, 1, and 2.
    public static void threeWayPartition(int[] A, int end){
      int count[] = new int[2];
      for(int i: A)
       {
        count[i]++;
       }
       int k=0;
       for(int i=0;i<=end;i++)
       {
        if(count[k]==0)
        {
          ++k;
          A[i]=k;
          count[k]--;
        }
        else
        {
          A[i]=k;
          count[k]--;
        }
       }
        
    }
 
    public static void main (String[] args)
    {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int A[] = new int[n];
        for(int i=0; i<n; i++){
          A[i] = sc.nextInt();
        }
        threeWayPartition(A, A.length - 1);
        // System.out.println("-------------------------");
      	for(int i=0; i<n; i++){
          System.out.println(A[i]);
        }
    }
}