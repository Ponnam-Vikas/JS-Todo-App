// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Get references to input field, add button, and task list
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add event listener to the "Add" button
    addTaskBtn.addEventListener("click", function () {

        // Get the input value and remove extra spaces
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!"); // Show alert if input is empty
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a delete button for the task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn"); // Add class for styling

        // Add event listener to delete button to remove task
        deleteBtn.addEventListener("click", function () {
            li.remove(); // Remove the task when delete button is clicked
        });

        // Append delete button to the list item
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding task
        taskInput.value = "";
    });
});
