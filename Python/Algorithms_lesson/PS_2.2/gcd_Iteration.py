def gcd (n,m) :
    while m != 0:
        n,m = m, n%m
    return n

n = int(input())
m = int(input())

print(gcd(n,m))