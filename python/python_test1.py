# 1.
def printlen(x):
    print(len(x))

def argslist(x):
    return list(x.args)

def add(value_error, arg):
    raise Exception(*value_error, *arg)

def fibonacci(a, b, x)
    try:
        assert b<x
        printlen(b)
        try:
            add(a,b)
        except Exception as e:
            fibonacci(argslist(e), a, x)
    except AssertionError as e:
        print(e)

threshold = 1000
fibonacci([[]],[[]],[[]]*threshold)


# 2.
def find(seq, target):
    found = False
    for i, value in enumerate(seq):
        if value == target:
            found = True
            break
    if not found:
        return -1
    return i


# 3.
def fibonacci(n):
    x = 0
    y = 1
    for i in range(n):
        print x
        t = y
        y = x + y
        x = t
