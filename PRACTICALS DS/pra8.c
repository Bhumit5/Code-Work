// Write a program which creates a binary search tree.

#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
struct node
{
    int data;
    struct node *left;
    struct node *right;
} *root = NULL;

void insert(int);
void delete ();
void inorderDisplay();

int main()
{
    {

        printf("\n");
        printf("-----------------------------------------------\n");
        printf("Practical no.:-12\n");
        printf("Practical AIM : Creates a binary search tree\n");
        printf("CE-B3-200130107101-Patel Bhumitkumar Sureshbhai\n");
        time_t t;
        time(&t);
        printf("%s\n", ctime(&t));
        printf("-----------------------------------------------\n");
    }

    int choice, value;
    while (1)
    {
        printf("\nMenu of TREE Operations:");
        printf("\n1.INSERT NODE in Tree");
        printf("\n2.Delete the node");
        printf("\n3.Display tree in inorder:");
        printf("\n4.EXIT");
        printf("\nSelect your Choice :");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("\nEnter Value:");
            scanf("%d", &value);
            insert(value);
            break;
        case 2:
            delete ();
            break;
        case 3:
            if (root == NULL)
            {
                printf("\nTree is Empty...");
            }
            else
            {
                inorderDisplay(root);
            }
            break;
        case 4:
            exit(0);
            break;
        default:
            printf("\nWrong Choice of Menu :");
        }
    }
    return 0;
}

void insert(int val)
{
    struct node *current, *new1, *parent;
    int d; //d=direction, 0=left,1=right
    new1 = (struct node *)malloc(sizeof(struct node));
    new1->data = val;
    new1->left = NULL;
    new1->right = NULL;
    if (root == NULL)
    {
        root = new1;
        return;
    }
    current = root;
    parent = NULL;
    while (current != NULL)
    {
        if (val < current->data)
        {
            d = 0;
            parent = current;
            current = current->left;
        }
        else if (val > current->data)
        {
            d = 1;
            parent = current;
            current = current->right;
        }
        else
        {
            printf("\nNode exists....duplicate not allowed...");
        }
    }
    if (d == 0)
    {
        parent->left = new1;
    }
    else
    {
        parent->right = new1;
    }
}
void delete ()
{
    int val, d;
    printf("\nEnter the value you want to delete: ");
    scanf("%d", &val);
    struct node *current, *parent, *succeser, *q, *pred;

    if (root == NULL)
    {
        printf("\nEmpty Tree...!");
    }
    current = root;
    parent = NULL;

    while (current != NULL)
    {
        if (current->data == val)
        {
            break;
        }
        else if (val < current->data)
        {
            d = 0;
            parent = current;
            current = current->left;
        }
        else if (val > current->data)
        {
            d = 1;
            parent = current;
            current = current->right;
        }
    }
    if (current == NULL)
    {
        printf("\nNode is not node .");
    }
    if (current->left == NULL && current->right == NULL)
    {
        q = NULL;
    }
    else if (current->left == NULL)
    {
        q = current->right;
    }
    else if (current->right == NULL)
    {
        q = current->left;
    }
    else
    {
        succeser = current->right;
        if (succeser->left == NULL)
        {
            q = succeser;
            succeser->left = current->left;
        }
        else
        {
            pred = succeser;
            succeser = succeser->left;
            while (succeser->left != NULL)
            {
                pred = succeser;
                succeser = succeser->left;
            }
            pred->left = succeser->right;
            succeser->left = current->left;
            succeser->right = current->right;
            q = succeser;
        }
    }
    if (current == root)
    {
        root = q;
        printf("\nroot node deleted and new root node is %d", root->data);
    }
    else
    {
        if (d == 0)
        {
            parent->left = q;
        }
        else
        {
            parent->right = q;
        }
    }
    free(current);
}
void inorderDisplay(struct node *temp)
{
    if (temp != NULL)
    {
        inorderDisplay(temp->left);
        printf("%d,", temp->data);
        inorderDisplay(temp->right);
    }
}
