#include <stdio.h>
#include <time.h>
void swap(int x, int y);

int main()
{
    int a = 22, b =19;

    time_t t;
    time(&t);
    printf("\n Time and Date :- %s", ctime(&t));

    printf("CE-B2_200130107101_sem_DS-Practical-1\n");
    swap(a, b);
    printf("a =%d b =%d\n", a, b);
    return 0;
}
void swap(int x, int y)
{
    int t;
    t = x;
    x = y;
    y = t;

    printf("x=%d y=%d\n", x, y);
}
