
document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
  
    if (todoText !== '') {
      const todoList = document.getElementById('todo-list');
      const listItem = document.createElement('li');
      
      const textSpan = document.createElement('span');
      textSpan.textContent = todoText;
      textSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed');
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button';
      deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
      });
  
      listItem.appendChild(textSpan);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
      todoInput.value = '';
    }
  });
  
  document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('add-button').click();
    }
  });
  