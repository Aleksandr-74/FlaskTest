columnA, strA, columnB, strB = [float(x) for x in input().split()]

if abs(columnA - columnB) == 2 and abs(strA - strB) == 1 or abs(columnA - columnB) == 1 and abs(strA - strB) == 2:
    print('Yes')
else:
    print('No')






