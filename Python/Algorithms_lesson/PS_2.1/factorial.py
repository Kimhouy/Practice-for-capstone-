import time
def factorial(N) :
    if N == 0 :
        return 1
    else :
        return N * factorial(N - 1)
    
start = time.time()

N = int(input())
print(f"{N}! = ",factorial(N))

end = time.time()
print("Duration :",end - start)