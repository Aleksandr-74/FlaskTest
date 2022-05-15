a, b, c, a1, b1, c1 = [float(x) for x in input().split()]

if a == a1 and b == b1 and c == c1 or a == b1 and b == c1 and c == a1 or a == c1 and b == a1 and c == b1:
    print(' Boxes are equal')
elif a > a1 and b >= b1 and c >= c1 or a >= a1 and b > b1 and c >= c1 or a >= a1 and b >= b1 and c > c1:
    print('The first box is smaller than the second one')
elif a < a1 and b <= b1 and c <= c1 or a <= a1 and b < b1 and c <= c1 or a <= a1 and b <= b1 and c < c1:
    print('The first box is larger than the second one')
else:
    print('Boxes are incomparable')







