import math
P = float(input())
summa = 0
s1 = 10
S = 0
counter = 0
while S < 200:
    S += s1
    s1 += (s1 * P) // 100
    counter += 1
print('%.6f' %S, counter)