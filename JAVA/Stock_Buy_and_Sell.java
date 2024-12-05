/*
Given an array Arr[] of length n. It represents the price of a stock on ‘n’ days. The following guidelines need to be followed:

- We can buy and sell a stock only once.
- We can buy and sell the stock on any day but to sell the stock, we need to first buy it on the same or any previous day.
- We need to tell the maximum profit one can get by buying and selling this stock.
 */

 //solution

//  import java.util.*;

 class Stock_Buy_and_Sell
 {
    static void maxprofit(int a[])
    {
        int min=a[0],profit=0,max=0;
        int i;
        for(i=1;i<a.length;i++)
        {
            profit=a[i]-min;
            max=Math.max(max, profit);
            min=Math.min(min, a[i]);
        }
        System.out.println("Maximum profit earned is ₹"+max);
    }

    public static void main(String args[])
    {
        int a[]={7,5,4,7,8,1,2,3,6};
        maxprofit(a);
    }
 }