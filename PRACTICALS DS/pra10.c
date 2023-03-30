//Implementing Quick Sort.

#include<stdio.h>

void quicksort(int number[25],int first,int last){
   int i, j, pivot, temp;

   if(first<last)
    {
      pivot=first;
      i=first;
      j=last;

      while(i<j)
        {
         while(number[i]<=number[pivot]&&i<last)
            i++;
         while(number[j]>number[pivot])
            j--;
         if(i<j)
         {
            temp=number[i];
            number[i]=number[j];
            number[j]=temp;
         }
      }

      temp=number[pivot];
      number[pivot]=number[j];
      number[j]=temp;
      quicksort(number,first,j-1);
      quicksort(number,j+1,last);

   }
}

int main()
{
    {
    
   printf("\n");
   printf("-----------------------------------------------\n");
   printf("Practical no.:-14\n");
   printf("Practical AIM : Implementing Quick Sort\n");
   printf("CE-B3-200130107101-Patel Bhumitkumar Sureshbhai\n");
   time_t t;
   time(&t);
   printf("-----------------------------------------------\n");
   printf("%s\n",ctime(&t));

    }
   
   int i, count, number[25];

   printf("How many elements are you going to enter ? \n");
   scanf("%d",&count);

   printf("Enter %d elements: \n", count);
   for(i=0;i<count;i++)
      scanf("%d",&number[i]);

   quicksort(number,0,count-1);

   printf("Order of Sorted elements: ");
   for(i=0;i<count;i++)
      printf(" %d",number[i]);

   return 0;
}
