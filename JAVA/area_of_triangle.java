public class area_of_triangle {

    public static void main(String args[])
    {
        double a=60*Math.PI/180,b=60*Math.PI/180/2;
        int hy = 5;
        double area = Math.pow(hy, 2) * Math.sin(a) * Math.sin(b);
        System.out.format("%.3f",area);
    }
    
}
