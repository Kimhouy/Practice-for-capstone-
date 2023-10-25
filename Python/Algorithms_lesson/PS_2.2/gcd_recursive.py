def GCD (n,m) :
    print(n,m)
    if m == 0 : 
        return n
    else :
        return GCD(m,n%m)
    
n = int(input())
m = int(input())

print(GCD(n,m))
