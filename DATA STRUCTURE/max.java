import java.util.Scanner;

public class max {
    public static void main(String[] args) {
        int num1, num2, num3;
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Three numbers:");
        num1 = sc.nextInt();
        num2 = sc.nextInt();
        num3 = sc.nextInt();

        int max = num1;
        if(num2>max) max = num2;
        if(num3>max) max = num3;

        System.out.println(max);


    }
}
