// implement double hashing function with linear probing

#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <stdlib.h>

int tsize;
int hasht(int key)
{
int i;
i = key % tsize;
return i;
}
int rehashl(int key)
{
int i;
i = (key + 1) % tsize;
return i;
}
void main()
{
int key, arr[20], hash[20], i, n, s, op, j, k;
printf("Enter the size of the hash table: ");
scanf("%d", &tsize);
printf("\nEnter the number of elements: ");
scanf("%d", &n);
for (i = 0; i < tsize; i++)
hash[i] = -1;
printf("Enter Elements..... \n");
for (i = 0; i < n; i++)
{
scanf("%d", &arr[i]);
}
do
{
printf("\n\n1.Linear Probing\n2.Exit \nEnter your option: ");
scanf("%d", &op);
switch (op)
{
case 1:
for (i = 0; i < tsize; i++)
hash[i] = -1;
for (k = 0; k < n; k++)
{
key = arr[k];
i = hasht(key);
while (hash[i] != -1)
{
i = rehashl(i);
}
hash[i] = key;
}
printf("\nThe elements in the array are: ");
for (i = 0; i < tsize; i++)
{
printf("\n Element at position %d: %d", i, hash[i]);
}
break;
case 2:
{
   printf("\n");
   printf("-----------------------------------------------\n");
   printf("Practical no.:-18\n");
   printf("Practical AIM : Implementing double hashing by single probing\n");
   printf("CE-B3-200130107101-Patel Bhumitkumar Sureshbhai\n");
   time_t t;
   time(&t);
   printf("-----------------------------------------------\n");
   printf("%s\n",ctime(&t));
   printf("We are exiting....\n");
}
exit(0);
break;
default:
printf("\nWrong Choice of Menu :");
}
} while (op != 2);
}