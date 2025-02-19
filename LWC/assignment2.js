function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
      alert("Please enter a task.");
      return;
  }

  let li = document.createElement("li");
  
  let span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskValue;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
      li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  
  document.getElementById("taskList").appendChild(li);
  taskInput.value = ""; 
}

