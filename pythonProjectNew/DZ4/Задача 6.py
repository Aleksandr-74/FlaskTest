import math
n = int(input())
k = 1
s = 0
s1 = 0
for i in range(n):
    s1 += 1/(k+1)
    k += 1
s = math.factorial(k)/s1
print('%.6f' %s)