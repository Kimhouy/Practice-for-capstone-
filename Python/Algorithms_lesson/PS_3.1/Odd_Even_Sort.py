def solve(n,s) :
    odd = []
    even = []

    for i in range(len(s)) :
        if s[i] % 2 == 0 :
            even.append(s[i])
        else :
            odd.append(s[i])
    odd.sort()
    even.sort(reverse=True)
    print(" ".join(map(str,odd)))
    print(" ".join(map(str,even)))

n = int(input())
s = list(map(int,input().split()))
solve(n,s)