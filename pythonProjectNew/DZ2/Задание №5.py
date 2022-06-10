columnA, strA, columnB, strB = [float(x) for x in input().split()]

if columnA == columnB or strA == strB:
    print('Yes')
elif abs(columnA - columnB) == abs(strA - strB):
    print('Yes')
else:
    print('No')



