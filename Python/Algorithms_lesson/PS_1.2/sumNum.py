# solution 1

# def solve(N) :
#     s = 0
#     for i in range(1, N + 1) :
#         s += i
#     return s

# N = int(input())
# print(solve(N))

# This solution perform n addition operation depending on number of n


#-------------------------------------------------------

# solution 2

def sumNum (N) :
    s = N * (N + 1) // 2
    return s

N = int(input("Enter N : "))
print(sumNum(N) )

# this solution perform only one multiplication, one addition and one division no matter how many size of n