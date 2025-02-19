class Intern {

    constructor(name, department, project) {
      this.name = name;
      this.department = department;
      this.project = project;
    }


  }
  
  class GyanSys {
    
    constructor() 
    {
      this.interns = new Array();
      // this.interns = new Map();
    }
  
    addIntern(intern) 
    {
      let flag = 0;
      for (let i of this.interns)
      {
        if(i.name === intern.name)
        {
          flag = 1;
          console.log(`Intern with name "${intern.name}" already exists.`);
          break;
        }
      }

      if(flag == 0)
        this.interns.push(intern);

      // if (this.interns.has(intern.name)) {
      //   console.log(`Intern with name "${intern.name}" already exists.`);
      //   return;
      // }
      // this.interns.set(intern.name, intern);
    }
  
    showInterns() 
    {
      console.log("List of Interns:\n");

      for(let i of this.interns)
        console.log(`Name: ${i.name}\t| Department: ${i.department}\t| Project: ${i.project}`);
        

      // for (let [i,val] of this.interns)     
      //     console.log(`Name: ${val.name}\t| Department: ${val.department}\t| Project: ${val.project}`);
    }
  }
  

  const gyansys = new GyanSys();
  
  gyansys.addIntern(new Intern("Nitin", "Marketing", "Unilever"));
  gyansys.addIntern(new Intern("Sam", "Finance", "Gyansys"));
  gyansys.addIntern(new Intern("Ravi", "HR", "Employee Engagement"));
  
  gyansys.showInterns();
  