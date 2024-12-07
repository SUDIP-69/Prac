class Person(object):

    def __init__(self, name):
        self.name = name

    def getName(self):
        return self.name

    def isEmployee(self):
        return False


class Employee(Person):

    def isEmployee(self):
        return True


per = Person("President")  # An Object of Person
print(per.getName(), per.isEmployee())

emp = Employee("SDE")  # An Object of Employee
print(emp.getName(), emp.isEmployee())