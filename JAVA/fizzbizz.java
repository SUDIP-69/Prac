public class fizzbizz
{
    public static void main(String[] args) {
        int n =30;
        for(int i=1;i<=n;i++)
        {
            if(i%3==0 && i%5==0)
            System.out.println("fizzbizz ");
            else if(i%5==0)
            System.out.println("bizz ");
            else if(i%3==0)
            System.out.println("fizz ");
            else
            System.out.println(i);
        }
    }
}