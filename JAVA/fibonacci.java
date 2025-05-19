public class fibonacci {
    public static void main(String args[])
    {
        int n=9;
        int a=0,b=1,c;
        for(int i=2;i<=9;i++)
        {
            c=a+b;
            a=b;
            b=c;
        }

        System.out.println(b); //print the Nth fibonaci term
    }    
}
