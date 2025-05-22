public class revWord {
    public static void main(String[] args) {
        String str = "Hello there sweetie";
        StringBuilder sb = new StringBuilder();
        for (int i = str.split(" ").length - 1; i >= 0; i--) 
            sb.append(str.split(" ")[i]).append(" ");
        System.out.println(sb.toString());
    }
}
