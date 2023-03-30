import java.util.Scanner;

class countNumber {

  public static void main(String[] args) {
    int number, digit, count = 0;
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter a number : ");
    number = sc.nextInt();
    System.out.print("Enter a digit to count : ");
    digit = sc.nextInt();

    while (number != 0) {
      int reminder = number % 10;
      if (reminder == digit) {
        count += 1;
      }
      number /= 10;
    }

    System.out.println(digit + " is occurred " + count + " times in number");
  }
}
