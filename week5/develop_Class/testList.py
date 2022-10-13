import pytest

from List import List

@pytest.fixture
def createList():
    list = List()
    return list

def testCanCallList(createList):
    # list = List()
    createList

def testCanAppendList(createList):
    # list = List()
    # list.append('the')
    assert(createList.append('the')) == ['the']

def testCanFindString(createList):
    # list = List()
    # list.append('the')
    createList.append('the')
    assert(createList.find('the')) == 0

def testCanEvaluate(createList):
    # list = List()
    # list.append('the')
    # list.append('book')
    createList.append('the')
    createList.append('book')
    assert(createList.evaluate()) == ['the', 'book']
