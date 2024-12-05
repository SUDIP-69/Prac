/*
 Josh has a beautiful bookshelf. Which have m position to place books. There are already some books on it. You are given a m size sorted array x which contains the price of books.  For an empty position, the price is zero. Josh notice there are n empty position so brought n new book whose price is given n in a sorted array y. your task is to help josh to fill the empty position using new books such that their price (X, Y) has a sorted order. Print the elements of the output array X separated by a single space in a line.
*/

public class Josh {
      	// The function to merge `Y[]` into `X[]`
          public static void rearrange(int[] X, int[] Y)
          {
            int i=0,j=0,k=0;
            int Z[]=new int[X.length+Y.length];
            while(i<X.length && j<Y.length)
            {
                if(X[i]<Y[j])
                {
                    Z[k++]=X[i++];
                }
                else
                {
                    Z[k++]=Y[j++];
                }
            }
            while(i<X.length)
            {
                Z[k++]=X[i++];
            }
            while(j<Y.length)
            {
                Z[k++]=Y[j++];
            }i=0;

            for(int p: Z){
                if(p!=0)
                X[i++]=p;                
              }         
          }
       
    public static void main(String args[])
    {    
        int[] X =  {0, 2, 0, 3, 0, 5, 6, 0, 0};
        int[] Y = {1, 8, 9, 10, 15};
        rearrange(X, Y);
        for(int i=0; i<X.length; i++){
            System.out.print(X[i] + " ");
          }
      }
}
