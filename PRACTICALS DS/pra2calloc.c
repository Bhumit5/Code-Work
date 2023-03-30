#include <stdio.h>
#include <stdlib.h>
#include<time.h>
 

int main()
{
 
time_t t;

printf("\n Time and Date :- %s",ctime(&t));

printf("CE-B2_200130107101_sem3_DS-Practical-2\n");
    int* ptr;

    int n, i;
 

    n = 5;

    printf("Enter number of elements: %d\n", n);
 

    ptr = (int*)calloc(n, sizeof(int));
 

    if (ptr == NULL) {

        printf("Memory not allocated.\n");

        exit(0);

    }

    else {
 

        printf("Memory successfully allocated using calloc.\n");
 

        for (i = 0; i < n; ++i) {

            ptr[i] = i + 1;

        }
 

        printf("The elements of the array are: ");

        for (i = 0; i < n; ++i) {

            printf("%d, ", ptr[i]);

        }

    }
 

    return 0;
}
