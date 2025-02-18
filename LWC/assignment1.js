class Intern {

    constructor(name, department, project) {
      this.name = name;
      this.department = department;
      this.project = project;
    }


  }
  
  class GyanSys {
    
    constructor() {
      this.interns = new Map();
    }
  
    addIntern(intern) {
      if (this.interns.has(intern.name)) {
        console.log(`Intern with name "${intern.name}" already exists.`);
        return;
      }
      this.interns.set(intern.name, intern);
      console.log(`Intern "${intern.name}" added successfully.`);
    }
  
    showInterns() {
      console.log("List of Interns:");
      this.interns.forEach((intern) => {
        console.log(`Name: ${intern.name}, Department: ${intern.department}, Project: ${intern.project}`);
      });
    }
  }
  
  // Create a new GyanSys instance
  const gyansys = new GyanSys();
  
  // Add 3 Interns with different departments and projects
  gyansys.addIntern(new Intern("Alice", "Software Development", "AI Chatbot"));
  gyansys.addIntern(new Intern("Bob", "Marketing", "SEO Optimization"));
  gyansys.addIntern(new Intern("Charlie", "Human Resources", "Employee Engagement"));
  
  // Display all interns
  gyansys.showInterns();
  