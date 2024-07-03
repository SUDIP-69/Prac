/*
 Given an integer array, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum and prints the subarray.
 */

class Kadane {
    static int subarray(int a[])
    {
        int sum=0,i,max=-999;
        for(i=0;i<a.length;i++)
        {
            sum+=a[i];
            if(sum>max)
            max=sum;
            if(sum<0)
            sum=0;
        }
        return max;
    }

    public static void main(String args[])
    {
        int a[]={-1,-3,1,2,4,-1,-3,2,-3};
        System.out.println("Sum is :"+subarray(a));
    }
}
