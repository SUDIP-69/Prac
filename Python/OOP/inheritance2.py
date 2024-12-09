class person:
    def __init__(self,name,id):
        self.name=name
        self.id=id
    
    def display(self):
        print("Name: ",self.name + "\nId: ",self.id)

class student(person):
    def __init__(self,fname,lname,id):
        super().__init__(fname+" "+lname,id)

obj=student("sudip","chanda","2105676")
obj.display()