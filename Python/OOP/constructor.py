class emp:
    # default constructor
    def __init__(self):
        self.id=0;
        self.name="";
        pass

class stud:
    # parameterized constructor
    def __init__(self,roll,name):
        self.roll=roll;
        self.name=name;
        pass


obj1 = emp()
obj1.id=9
print(obj1.id)

obj2 = stud(2105676,"Sudip")
print(obj2.roll)