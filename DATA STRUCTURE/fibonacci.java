import java.util.Scanner;

public class fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a=0,b=1,c,range;

        System.out.print("Enter the number for range of fibonacci :  ");
        range = sc.nextInt();

        System.out.print("Series : ");
        for(int i = 0; i < range; i++){
            System.out.print(a + " ");
            c = a;
            a = b;
            b = a + c;
        }
    }
}
