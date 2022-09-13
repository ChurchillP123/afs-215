def Kata(val):
    if val < 3:
        return str(val)
    else:
        if val % 3 == 0 and val % 5 == 0:
            return "PepsiCoke"
        elif val % 5 == 0:
            return "Coke"
        elif val % 3 == 0:
            return "Pepsi"

print(Kata(1))
print(Kata(2))
print(Kata(3))
print(Kata(5))
print(Kata(6))
print(Kata(10))
print(Kata(15))