class List:
    def __init__(self):
        self.list = []

    def append(self, string):
        self.list.append(string)
        return self.evaluate()

    def find(self, string):
        return self.list.index(string)

    def evaluate(self):
        return self.list