n = int(input())
Fn = 0
F1 = 1
F2 = 1
while n >= Fn:
    Fn = F1 + F2
    F1 = F2
    F2 = Fn
print(Fn)