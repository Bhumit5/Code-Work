// C program for implementation of Bubble sort

#include <stdio.h>
#include <time.h>

void swap(int *xp, int *yp)
{
  int temp = *xp;
  *xp = *yp;
  *yp = temp;
}
void bubbleSort(int arr[], int n)
{
  int i, j;
  for (i = 0; i < n - 1; i++)
  for (j = 0; j < n - i - 1; j++)
  if (arr[j] > arr[j + 1])
  swap(&arr[j], &arr[j + 1]);
}

void printArray(int arr[], int size)
{
  int i;
  for (i = 0; i < size; i++)
  printf("%d ", arr[i]);
  printf("\n");
}

int main()
{
 {
   printf("\n");
   printf("-----------------------------------------------\n");
   printf("Practical no.:-16\n");
   printf("Practical AIM : Implementing Bubble Sort\n"); 
   printf("CE-B3-200130107101-Patel Bhumitkumar Sureshbhai\n");
   time_t t;
   time(&t);
   printf("%s\n",ctime(&t));
   printf("-----------------------------------------------\n");
  }
 int arr[50];
 int i, n;
 printf("Enter total number of elements : ");
 scanf("%d", &n);
 printf("Enter the elements....\n");
 for (i = 0; i < n; i++)
 {
 scanf("%d", &arr[i]);
 }
 bubbleSort(arr, n);
 printf("Sorted array: \n");
 printArray(arr, n);
 return 0;
}