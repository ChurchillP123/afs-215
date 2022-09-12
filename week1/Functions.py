class Functions:
    def __init__(self):
        self.list = []
    def addNum(self, num) -> None:
        self.list.append(num)
    def addString(self, str) -> None:
        self.list.append(str)
    def addDict(self, dict) -> None:
        self.list.extend(dict.items())
    def addTuple(self, tuple) -> None:
        self.list.extend(tuple)
    def __str__(self):
        return str(print(self.list))

myFunc = Functions()
num = 1
string = 'the'
dict = {'a': 'b', 'b': 'c'}
tuple = (1, 2, 3, 4)
myFunc.addNum(1)
myFunc.addString(string)
myFunc.addDict(dict)
myFunc.addTuple(tuple)
print(myFunc)