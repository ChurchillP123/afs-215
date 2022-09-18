def PepsiCoke(val):
    if val < 3:
        return str(val)
    else:
        if val % 3 == 0 and val % 5 == 0:
            return "PepsiCoke"
        elif val % 5 == 0:
            return "Coke"
        elif val % 3 == 0:
            return "Pepsi"
