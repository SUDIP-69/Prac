/*WAP to find all the non-fibonacci numbers between 1 to n */

import java.util.ArrayList;
import java.util.List;

public class NonFibonacci {

    public static void main(String[] args) {
        int n = 20;
        int a = 1, b = 2, c;
        System.out.println(a + "\n" + b);
        List<Integer> fib = new ArrayList<Integer>();
        fib.add(a);
        fib.add(b);
        for (int i = 1; i <=n; i++) {
            if (i == a) {
                c = a + b;
                a = b;
                b = c;
                fib.add(c);
            } else
                System.out.print(i + " ");
        }
        System.out.println("\n"+fib);
        for (int i = 1; i <= n; i++) {
            if (!fib.contains(i))
                System.out.print(i + " ");
        }
    }

}
