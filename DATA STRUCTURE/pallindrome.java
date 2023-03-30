import java.util.Scanner;

public class pallindrome {

  //~ Pallindrome for string
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    String str = sc.nextLine();
    String reverse = "";

    for (int i = 0; i < str.length(); i++) {
      char ch = str.charAt(i);
      reverse = ch + reverse;
    }
    if (str.toLowerCase().equals(reverse.toLowerCase())) {
      System.out.println(str + " is Palindrom String");
    } else {
      System.out.println(str + " is not Palindrom String");
    }

    
    //~ Pallindrome for number
    /*
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
  
      int number, temp, sum = 0;
  
      System.out.print("Enter the number : ");
      number = scanner.nextInt();
  
      temp = number;
      while (number > 0) {
        int reminder = number % 10;
        sum = (10 * sum) + reminder;
        number /= 10;
      }
  
      if(temp==sum){
        System.out.println("The number "+temp+" is pallindrome number.");
      }else{
        System.out.println("The number "+temp+" is not pallindrome number.");
      }
    }
    */
  }
}
