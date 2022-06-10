import math
n = int(input())
kf = 1
s = 0
s1 = 0
for i in range(1, n+1):
    kf *= i
    s1 += 1 / (i+1)
    s += kf/s1
print('%.6f' %s)