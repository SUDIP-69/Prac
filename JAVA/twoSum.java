import java.util.ArrayList;

public class twoSum {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int target = 6;
        ArrayList<Integer> list = new ArrayList<Integer>();
        for(int i:arr)
        list.add(i);
        for(int i:arr)
        {
            if(list.contains(target-i) && (target-i)!=i)
            {
                System.out.println(i +" + "+ (target-i));
                list.remove(list.indexOf(i));
            }
        }
    }    
}
