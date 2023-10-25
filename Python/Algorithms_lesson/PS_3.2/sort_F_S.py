def first(k) :
    return k[0]

def second(k) :
    return k[1]

S = [(3,5),(2,1),(5,3),(1,4),(4,2)]

print("First  :",sorted(S,key = first))
print("Second :",sorted(S,key = second))