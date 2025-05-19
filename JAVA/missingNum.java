import java.util.*;

public class missingNum
{
    public static void main(String args[])
    {
        int[] a={1,9,3,4,2,7,5,6};
        int n=9;
        int sum=0;
        for(int i:a)
            sum+=i;
        int calc = n*(n+1)/2;
        System.out.print(calc-sum);
    }
}