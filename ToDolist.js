document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    let listItem = document.createElement('li');
    listItem.classList.add('task-item');
    listItem.textContent = taskInput.value.trim();

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
});
