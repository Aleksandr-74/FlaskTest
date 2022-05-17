import math
x, y, n = map(int, input().split())
sum_y = n * y
sum_x = n * x + math.floor(sum_y / 100)
print(sum_x, sum_y % 100)
