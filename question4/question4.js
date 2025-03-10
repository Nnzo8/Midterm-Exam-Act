// CRUD MANAGEMENT // 
let crudtask = [];

// DOM Elements
const crudForm = document.getElementById('crudForm'); 
const crudInput = document.getElementById('crudInput'); 
const crudList = document.getElementById('crudList');

// Function to render tasks
function renderTasks () {
    crudList.innerHTML = ''; 
    crudtask.forEach((task, index) => {
    const tas = document.createElement('tas'); 
    tas.className = 'crudTask'; 
    tas.innerHTML = `
        <span>${task}</span>
        <button onclick="editTodo (${index})">Edit</button> 
        <button onclick="deleteTodo (${index})">Delete</button>
    `;
    crudList.appendChild(li);
    });
}


// Function to add a new task
function addTasks (event) {
    event.preventDefault(); // Prevent form submission 
    const newTask = crudInput.value.trim();
    if (newTask) {
        crudtask.push(newTask);
        crudInput.value = ''; // Clear the input 
        renderTasks();
    }
}

// Function to edit a task
function editTasks (index) {
    const updatedTasks = prompt ('Edit your tasks:', crudtask [index]); 
    if (updatedTasks !== null) {
        crudtask [index] = updatedTasks.trim();
        renderTasks ();
    }
}

// Function to delete a todo
function deleteTasks (index) {
    if (confirm( 'Are you sure you want to delete this task?')) {
        crudtask.splice (index, 1);
        renderTodos ();
    }
}

//Event Listeners
crudForm.addEventListener('submit', addTasks);

//Initial Render
renderTasks();