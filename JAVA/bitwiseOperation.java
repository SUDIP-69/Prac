public class bitwiseOperation {
    public static void main(String[] args) {
        int a=6;
        int val = a<<1;
        System.out.println("Multiplication of " + a +" by 2 = " + val);
        val = a>>1;
        System.out.println("Division of " + a +" by 2 = " + val);
        val = a^2;
        System.out.println("XOR of " + a +" with 2 = " + val);
    }
}