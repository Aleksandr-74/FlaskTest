a, n =map(float, input().split())
n = int(n)
sum_0 = 1
for i in range(1, n+1):
    sum_0 += (-a) ** int(i)
print('%.3f' %sum_0)


