document.addEventListener("DOMContentLoaded", () => {
  // Step 1 & 2: Select form and add event listener
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (event) => {
    // Step 2: Add preventDefault()
    event.preventDefault();
    
    // Step 3: Handle form data - gather data into an object
    const taskDescription = document.getElementById('new-task-description').value
    
    // Call buildToDo and pass in the saved task
    buildToDo(taskDescription);
    
    // Optional: Clear the form after submission
    event.target.reset();
  });

  // Step 4: Add item to list and display
  function buildToDo(task) {
    // Create a new li element
    const li = document.createElement('li');
    
    // Add the task as the textContent
    li.textContent = task;
    
    // Append the li element to the task list
    const taskList = document.getElementById('tasks');
    taskList.appendChild(li);
    
   }
});