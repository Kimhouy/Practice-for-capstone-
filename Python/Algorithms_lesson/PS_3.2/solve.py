def solve(n,p) :
    p.sort(key = lambda x : (x[0], -x[1]))
    print("psorted :",p)
    for i in range(n) :
        print(p[i])
        print(" ".join(map(str, p[i])))

n = int(input())
p = [list(map(int,input().split())) for _ in range (n)]
print("p :",p)
print("Sorted")
solve(n,p)