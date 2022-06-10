n = int(input())
F1 = 1
F2 = 1
Fn = F1+F2
while n > Fn:
    Fn = F1 + F2
    F1 = F2
    F2 = Fn
if Fn == n:
    print(True)
elif Fn != n:
    print(False)

