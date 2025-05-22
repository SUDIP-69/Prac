import java.util.ArrayList;

public class merge2array {

    public static void main(String[] args) {
        int[] a = {1,3,5,7,9};
        int[] b = {0,2,4,6,8};
        int i=0,j=0;
        ArrayList<Integer> c = new ArrayList<Integer>();
        while(a.length>i && b.length>j)
        {
            if(a[i]<b[j])
            c.add(a[i++]); 
            else
            c.add(b[j++]);           
        }
        while(i<a.length)
        c.add(a[i++]);

        while(j<b.length)
        c.add(b[j++]);

        System.out.println(c);
    }
    
}
