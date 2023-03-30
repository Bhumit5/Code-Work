/* Implement recursive and non-recursive tree traversing methods
inorder, preorder and post-order traversal.*/

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
void preorder();
void inorder();
void postorder();
void delete ();

int main()
{
 {

   printf("\n");
   printf("-----------------------------------------------\n");
   printf("Practical no.:-13\n");
   printf("Practical AIM : Implementing recursive and non-recursive tree traversing methods\n");
   printf("CE-B3-200130107101-Patel Bhumitkumar Sureshbhai\n");
   time_t t;
   time(&t);
   printf("-----------------------------------------------\n");
   printf("%s\n",ctime(&t));

}
    int choice, value;
    while (1)
    {
        printf("\nMenu of TREE Operations:");
        printf("\n1.INSERT NODE in Tree");
        printf("\n2.PREORDER");
        printf("\n3.INORDER");
        printf("\n4.POSTORDER");
        printf("\n5.Delete the node");
        printf("\n6.EXIT");
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
            printf("\nPreorder traversal of Tree :");
            if (root == NULL)
            {
                printf("\nTree is Empty...");
            }
            else
            {
                preorder(root);
            }
            break;
        case 3:
            printf("\nInorder traversal of Tree :");
            if (root == NULL)
            {
                printf("\nTree is Empty...");
            }
            else
            {
                inorder(root);
            }
            break;
        case 4:
            printf("\nPostorder traversal of Tree :");
            if (root == NULL)
            {
                printf("\nTree is Empty...");
            }
            else
            {
                postorder(root);
            }
            break;
        case 5:
            delete ();
            break;
        case 6:
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
void preorder(struct node *temp)
{
    if (temp != NULL)
    {
        printf("%d,", temp->data);
        preorder(temp->left);
        preorder(temp->right);
    }
}
void inorder(struct node *temp)
{
    if (temp != NULL)
    {
        inorder(temp->left);
        printf("%d,", temp->data);
        inorder(temp->right);
    }
}
void postorder(struct node *temp)
{
    if (temp != NULL)
    {
        postorder(temp->left);
        postorder(temp->right);
        printf("%d,", temp->data);
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
