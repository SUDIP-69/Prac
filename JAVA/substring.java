import java.util.*;
class Solution 
{
    public static int lengthOfLongestSubstring(String s) 
    {
        Stack<Character> stack = new Stack<Character>();
        int len = 0, maxlen = -1;

        for (int i = 0; i < s.length(); i++) 
        {
            if (stack.search(s.charAt(i)) >= 0) 
            {
                while (!stack.isEmpty()) 
                {
                    System.out.print(stack.pop()+" ");
                    len++;
                }

                maxlen = len > maxlen ? len : maxlen;
                len=0;
                System.out.println();
                stack.push(s.charAt(i));
            }

            else 
                stack.push(s.charAt(i));
        }
        while (!stack.isEmpty()) 
                {
                    System.out.print(stack.pop()+" ");
                    len++;
                }

                maxlen = len > maxlen ? len : maxlen;
                len=0;
                System.out.println();
        return maxlen;
    }

    public static void main(String args[])
    {
        String s="au";
        System.out.println("The length of substring: "+ lengthOfLongestSubstring(s));
    }
}