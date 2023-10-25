import sys

def factorial(N) :
    if N == 0 :
        return 1
    else :
        return N * factorial(N - 1)
# show recursion limit
# print(sys.getrecursionlimit())

# set recursion limit
sys.setrecursionlimit(10 ** 5)
# print(sys.getrecursionlimit())

N = int(input())
print(f"{N}! = ",factorial(N))