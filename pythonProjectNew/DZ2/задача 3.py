n = int(input())
counter = 0
s = 0
while n != 0:
    s += n % 10
    counter += 1
    n = n // 10
print(counter, s)