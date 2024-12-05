
public class vowel {

    static String remove_vowel(String s)
    {
        // String str="";
        // for(char ch:s.toCharArray())
        // {
        //     if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')
        //     continue;
        //     str=str+ch;
        // }
        // return str;

        return s.replaceAll("[aeiouAEIOU]", "");
    }

    public static void main(String args[]) {
        String s = "asdQfuighjOf";
        System.out.println(s);
        System.out.println(remove_vowel(s));
    }

}
