columnA, strA, columnB, strB = [float(x) for x in input().split()]
if abs(columnA - columnB) == abs(strA - strB):
    print('Yes')
else:
    print('No')

