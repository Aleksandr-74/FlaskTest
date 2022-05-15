a, b, c, = [float(x) for x in input().split()]

if a == b and a == c:
    print(3)
elif a == b and a != c or b == c and a != b or a == c and a != b:
    print(2)
else:
    print(0)