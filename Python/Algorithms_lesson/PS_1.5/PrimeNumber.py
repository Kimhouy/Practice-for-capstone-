import time

# solution 1
# def findPrimeNum (n) : 
#     if n <= 1 :
#         return False
#     for i in range(2, n) :
#         print(i)
#         if n % i == 0 :
#             return False
#     return True

# start = time.time()
# N = int(input())
# print(findPrimeNum(N))
# print('YES' if findPrimeNum(N) else 'NO')

# end = time.time()
# print("Duration :",end - start)


#solution 2
def findPrimeNum (n) : 
    if n <= 1 :
        return False
    for i in range(2, int(n ** 0.5) + 1) :
        if n % i == 0 :
            return False
    return True

start = time.time()
N = int(input())
print('YES' if findPrimeNum(N) else 'NO')

end = time.time()
print("Duration :",end - start)