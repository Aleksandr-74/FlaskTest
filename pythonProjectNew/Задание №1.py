a, b, c = [float(x) for x in input().split()]

if a == b and b == c:
    print(3)
elif a == b and b != c or a != b and b == c or a == c and c != b:
    print(2)
else:
    print(0)