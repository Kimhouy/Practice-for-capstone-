def collatz(n) :
    print("n :",n)
    if n == 1 :
        return [1]
    elif n % 2 == 0 :
        return [n] + collatz(n//2)
    else : # n % 2 == 1
        return [n] + collatz(3 * n +1)
    
n = int(input())
s = collatz(n)
print(len(s))

# print("Len of s :",len(s))
# print("Collatz sequence :",end=" ")
# print(' '.join(map(str,s))) # convert the elements in s to str
