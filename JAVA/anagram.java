import java.util.Arrays;

public class anagram {
    public static void main(String[] args) {
        String s1 = "ramu";
        String s2="umar";
        char[] ch1 = s1.toCharArray();
        char[] ch2 = s2.toCharArray();
        Arrays.sort(ch1);
        Arrays.sort(ch2);
        if(Arrays.equals(ch1,ch2))
        System.out.println("Anagram");
        else
        System.out.println("Not Anagram");
    }
}
