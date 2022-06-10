columnA, strA, columnB, strB = [float(x) for x in input().split()]

if abs(columnA - columnB) == 1 and abs(strA - strB) == 1:
    print('Yes')
elif abs(columnA - columnB) == 0 and abs(strA - strB) == 1:
    print('Yes')
elif abs(columnA - columnB) == 1 and abs(strA - strB) == 0:
    print('Yes')
else:
    print('No')






