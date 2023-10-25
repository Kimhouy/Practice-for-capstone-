import random 

SEED,MIN,MAX,N = 2022, 10, 100, 8
random.seed(SEED)
S = random.sample(range(MIN,MAX), N)

print("S :",S)
print("sorted() :",sorted(S))
print("S :",S)

S.sort()
print("S.sort() :",S)
print("S :",S)
print("Reverse S :",sorted(S,reverse=True))
print("S :",S)
S.sort(reverse=True)
print("S.sorte(reverse=True) :",S)