#include <stdio.h>
#include <stdlib.h>
#include<time.h>
 
int main()
{
 
time_t t;
time(&t);
printf("\n Time and Date :- %s",ctime(&t));

printf("CE-B2_200130107101_sem3_DS-Practical-2\n");
    int *ptr, *ptr1;

    int n, i;
    n = 5;

    printf("Enter number of elements: %d\n", n);
 

    ptr = (int*)malloc(n * sizeof(int));
 

    ptr1 = (int*)calloc(n, sizeof(int));
 
    if (ptr == NULL || ptr1 == NULL) {

        printf("Memory not allocated.\n");

        exit(0);

    }

    else {
 

        printf("Memory successfully allocated using malloc.\n");
 

        free(ptr);

        printf("Malloc Memory successfully freed.\n");
 

        printf("\nMemory successfully allocated using calloc.\n");
 

        free(ptr1);

        printf("Calloc Memory successfully freed.\n");

    }
 

    return 0;
}