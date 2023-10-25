S = [(3,5),(2,1),(5,3),(1,4),(4,2)]

print("Sort by x :",sorted(S, key = lambda k : k[0]))
print("Sort by y :",sorted(S, key = lambda k : k[1]))

lst = [(2,5),(2,1),(1,3),(1,4),(1,2)]

# passing tuple
print("Sort by tuple :",end=" ")
print(sorted(lst, key =  lambda k : (k[0],k[1])))

print("Sort by tuple :",end=" ")
print(sorted(lst, key =  lambda k : (k[0],-k[1])))

lst.sort(key = lambda k : (k[0],-k[1]))
print("lst.sort() :",lst)