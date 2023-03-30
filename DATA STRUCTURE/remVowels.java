import java.util.Scanner;

public class remVowels {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter the string you want to remove the vowels :");
    String line = sc.nextLine();

    String result = line.replaceAll("[aeiouAEIOU]", "");
    System.out.println("The resultant string is " + result);
  }
}
