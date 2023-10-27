def solve(n,s):
    cnt = 0
    for i in range(n - 1):
        minv, minj= s[i], i
        for j in range(i +1, n):
            if s[j] < minv:
                minv, minj = s[j], j
                print(s[j],s[j])
        if i != minj:
            s[i], s[minj] = s[minj], s[i]
            cnt += 1
    return cnt
n = int(input())
s = list(map(int, input().split()))
print(solve(n,s))