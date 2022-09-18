from PepsiCoke import PepsiCoke

def testCanCallOnPepsiCoke():
    PepsiCoke(1)
def testOne():
    assert PepsiCoke(1) == '1'
def testTwo():
    assert PepsiCoke(2) == '2'
def testThree():
    assert PepsiCoke(3) == 'Pepsi'
def testFive():
    assert PepsiCoke(5) == 'Coke'
def testMultiple3():
    assert PepsiCoke(6) == 'Pepsi'
def testMultiple5():
    assert PepsiCoke(10) == 'Coke'
def testMultiple3and5():
    assert PepsiCoke(15) == 'PepsiCoke'