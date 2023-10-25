def hanoi(n,src,via,dst) :
    global cnt
    if n == 1 :
        cnt += 1
        print(f"{src} -> {dst}")
    else:
        hanoi(n-1,src,dst,via)
        hanoi(1,src,via,dst)
        hanoi(n-1,via,src,dst)

n = int(input())
cnt = 0
count = (2 ** n) - 1 # use T(n) formula to find the number of move
hanoi(n,"A","B","C")
print(cnt)
print(count)