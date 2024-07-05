//WAP to find the LCM of any 10 natural numbers.
import java.util.Scanner;

class lcm {

    public static void main(String args[])
    {
        int []a=new int[10];
        int pro=1,max=0;
        Scanner ob=new Scanner(System.in);
        System.out.println("Enter 10 numbers");
        for(int i=0;i<10;i++)
        {
            a[i]=ob.nextInt();
            pro = pro*a[i];
            max=a[i]>max?a[i]:max;
        }
        for(int i=max+1;i<=pro;i++)
        {
            for(int j=0;j<10;j++)
            {
                if(i%a[j]!=0)
                break;
                else
                {
                    if(j==9)
                    {
                        System.out.println("LCM: "+i);
                        return;
                    }
                    continue;
                }
            }
        }
        ob.close();
        return;
    }
    
}
