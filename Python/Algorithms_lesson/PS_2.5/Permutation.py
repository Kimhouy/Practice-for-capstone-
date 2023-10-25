def Permutaion(i,n,s) :
    if i == n - 1 :
        print("".join(s))
    else :
        for j in range(i,n) :
            s[i],s[j] = s[j],s[i]
            Permutaion(i+1,n,s)
            s[i],s[j] = s[j],s[i]

n = int(input())
s = [chr(ord('A') + i) for i in range(n)]
Permutaion(0,n,s)

# print(s)
# a = [ord("A") +i  for i in range(n)]
# print(*a)