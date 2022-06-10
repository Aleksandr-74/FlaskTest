# первый вариант решения
a, b = map(int, input().split())
print(b-2)
for i in range(-b+1, -a):
    print(-i, end=' ')
print()

# второй вариант
a, b = map(int, input().split())
s = []
for i in range(-b+1, -a):
   s += [-i]
print(len(s))
print(s)

