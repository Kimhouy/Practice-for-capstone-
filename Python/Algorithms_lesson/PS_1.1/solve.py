def madd(A,B) :
    n, m = len(A), len(A[0])
    # first we need to know the size of the matices, N and M
    # the numbers of rows is the len of A, columns is len of inner list at index  0 of A
    print('row : ',n)
    print('col : ',m)
    C = [[0] * m for _ in range(n)]
    print("C : ",C)

    for i in range(n) :
        for j in range(m) :
            C[i][j] = A[i][j] + B[i][j]
    return C

def mprint(A) :
    for i in range(len(A)) :
        print(' '.join(map(str, A[i])))
        # we need to convert each value in the row to a string, then use join function
        # with a space character to 


N, M = map(int, input("Enter row and col :").split()) # input N as  row , M as col
# we can use the map function to convert the string into numeric values 
# using the int funciton

A = [list(map(int, input("Enter Matrix A : ").split())) for _ in range(N)]
# using the input function, we convert the input data into integers using the map function
# and then convert the result into a list using the list funciton.
# by iterate through the range value, we can create a two-dimensional list 'A' with lists inside

B = [list(map(int, input("Enter Matrix B : ").split())) for _ in range(N)]
C = madd(A,B)

mprint(C)

