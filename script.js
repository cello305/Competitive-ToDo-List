//main menu options
//buttons for: add to to-do, show todo, show leaderboard

const todoList = [];
const listContainer = document.getElementById('list-container');
const todoInput = document.getElementById('todoInput');
const showTodoListButton = document.getElementById('showTodoListButton');
const addTodoButton = document.getElementById('addTodoButton');
const removeTodoButton = document.getElementById('removeTodoButton');

showTodoListButton.addEventListener('click', showTodoList);
addTodoButton.addEventListener('click', addTodo);
removeTodoListButton.addEventListener('click', removeTodo);

function showTodoList() {
  const todoListItems = generateTodoList();
  const listItemsHtml = todoListItems.join('<br>');
  listContainer.innerHTML = listItemsHtml;
}

function generateTodoList() {
  if (todoList.length === 0) {
    return ["To Do List is currently empty. Add some items."];
  } else {
    for(let i = 0; i < todoList.length; i++){
      return todoList;
    }
  }
}

function addTodo() {
  let task = document.createElement('div');
  task.classList.add('task');

  let li = document.createElement('li');
  li.innerText = todoInput.value;
  task.appendChild(li);

  todoList.push(todoInput.value); 

  todoInput.value = ''; 
}

function removeTodo() {
  
  todoList.push();
}