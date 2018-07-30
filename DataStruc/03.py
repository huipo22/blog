#  斐波那契
def fib(n):
    if(n == 1 or n == 2):
        return 1
    else:
        return fib(n-1)+fib(n-2)


# 汉诺塔
def move(n, x, y, z):
    '''
    n: 多少个盘子
    x  x轴
    y  y轴
    z  z轴
    '''
    if(n == 1):
        print(x, '->', z)
    else:
        move(n-1, x, z, y)
        print(x, '->', z)
        move(n-1, z, x, y)


move(5, 'A', 'B', 'C')


# 八皇后
def queen(A, cur=0):
    '''
    A = [None, None, None, None, None, None, None, None]
    cur 当前位置
    '''
    if(cur == len(A)):
        print(A)
        return 0
    for col in range(len(A)):
        A[cur], flag = col, True
        for row in range(cur):
            if(A[row] == col or abs(col-A[row]) == cur-row):
                flag = False
                break
        if flag:
            queen(A, cur+1)


queen([None]*8)

