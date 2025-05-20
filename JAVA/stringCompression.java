public class stringCompression {

    public static String compress(String str)
    {
        StringBuilder sb = new StringBuilder();
        int count=1;
        for(int i=0;i<str.length();i++)
        {
            if(i+1<str.length() && str.charAt(i) == str.charAt(i+1))
            count++;
            else{
                sb.append(str.charAt(i)).append(count);
                count=1;
            }
        }

        return sb.length() < str.length() ? sb.toString() : str;
    }
    public static void main(String args[])
    {
        String str1 = "aaabCcccccc";
        String str2 = "aabc";
        String s = compress(str1.toLowerCase());
        if(s!="")
        System.out.print(s);
    }
}
