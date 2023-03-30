// implement Binary Search

#include <stdio.h>
#include <time.h>

int binarysearch(int arr[], int size, int element)
{
int high, low, mid;
low = 0;
high = size - 1;
while (low <= high)
{
mid = (low + high) / 2;
if (arr[mid] == element)
{
return mid;
}
if (arr[mid] < element)
{
low = mid + 1;
}
else
{
high = mid - 1;
}
}
return -1;
}
int main()
{
int arr[] = {0, 2, 3, 19, 22, 28, 30, 95, 313};
int size = sizeof(arr) / sizeof(int);
int element;
{
   printf("\n");
   printf("-----------------------------------------------\n");
   printf("Practical no.:-17\n");
   printf("Practical AIM : Implementing Binary search\n");
   printf("CE-B3-200130107101-Patel Bhumitkumar Sureshbhai\n");
   time_t t;
   time(&t);
   printf("%s\n",ctime(&t));
   printf("-----------------------------------------------\n");

}
printf("Enter the element : ");
scanf("%d",&element);
int searchIndex = binarysearch(arr, size, element);
printf("The element %d was found at index %d\n", element, searchIndex);

return 0;
}