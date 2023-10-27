def median(s) :
    s.sort()
    while len(s) > 0 :
        mid = (len(s) -1)//2
        print(s[mid], end=" ")
        # print(s,mid,s[mid])
        s.remove(s[mid])
    print()

n = int(input())
s = list(map(int,input().split()))

median(s)