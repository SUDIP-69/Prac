class ToDoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      if (task.trim() !== "") {
        this.tasks.push(task);
        console.log(`Task "${task}" added.`);
      } else {
        console.log("Task cannot be empty.");
      }
    }
  
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Task "${task}" removed.`);
      } else {
        console.log("Task not found.");
      }
    }
  
    showTasks() {
      console.log("To-Do List:");
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  }
  
  // Example usage
  const myToDoList = new ToDoList();
  myToDoList.addTask("Complete JavaScript project");
  myToDoList.addTask("Review pull requests");
  myToDoList.showTasks();
  myToDoList.removeTask("Review pull requests");
  myToDoList.showTasks();
  