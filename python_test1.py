def printlen(x):
    print(len(x))

def argslist(x):
    return list(x.args)

def add(value_error, arg):
    raise Exception(*value_error, *arg)

def fibonacci(a, b, x):
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
