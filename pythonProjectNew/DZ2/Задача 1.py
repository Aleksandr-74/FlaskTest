n = int(input())
k = False
while n != 0 and k == False:
    if n % 2 == 1:
        k = True
    n = n // 10
print(k)