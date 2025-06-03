import java.util.*;

public class students {

    students(int rollNo, String name) {
        this.rollNo = rollNo;
        this.name = name;
    }

    int rollNo;
    String name;

    public static students[] a() {
        ArrayList<students> studentList = new ArrayList<>();
        Scanner ob = new Scanner(System.in);
        while (true) {
            System.out.println("Enter roll number (or -1 to stop): ");
            int rollNo = ob.nextInt();
            if (rollNo == -1) {
                break;
            }
            ob.nextLine(); // Consume newline
            System.out.println("Enter name: ");
            String name = ob.nextLine();
            studentList.add(new students(rollNo, name));
        }
        ob.close();

        return studentList.toArray(new students[0]);
    }

    public static void main(String[] args) {
        students[] studentArray = a();

        for (students student : studentArray) {
            System.out.println("Roll No: " + student.rollNo + ", Name: " + student.name);
        }
    }

}
