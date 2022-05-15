N, M, K = [float(x) for x in input().split()]
V = N * M
if (V - K) % N == 0 or (V - K) % M == 0:
    print('Yes')
else:
    print('No')






