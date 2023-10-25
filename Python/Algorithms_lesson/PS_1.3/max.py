def findMax (N , S) :
    maxn, maxi = S[0] , 0
    for i in range(1, N ) :
        if maxn < S[i] : 
            maxn,maxi = S[i],i 
    return maxn,maxi

N = int(input("Enter N : "))
S = list(map(int, input("Enter S : ").split()))

maxn,maxi = findMax(N,S)
print(f"Max : {maxn} , Index : {maxi}")