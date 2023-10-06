const addButton = document.getElementById("addButton");
const userInput = document.getElementById("userInput");
const submitValue = document.getElementById("submitValue");

let todoList = [];
let score = 0;

function createItem() {
    const x = userInput.value;

    // Validate input
    if (x === "") {
        alert("You Must Write Something!");
        return;
    }
    todoList.push(x);
    userInput.value = ""; // Clear the input field
    renderList(); // Rebuild the list
}

function renderList() {
    const list = document.getElementById("submitValue");
    list.innerHTML = ""; // Clear the list to rebuild it

    todoList.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerText = item + " ";

        // Create a delete and edit button for each item
        let deleteButton = document.createElement('button');
        let editButton = document.createElement('button');
        let doneButton = document.createElement('button');

        // Add the text to each button
        deleteButton.innerText = "\u00D7";
        editButton.innerText = "\u270E";
        doneButton.innerText = "\u2713";

        // Add event listeners to the buttons and pass the index
        deleteButton.addEventListener('click', function () {
            deleteItem(index);
        });
        editButton.addEventListener('click', function () {
            editItem(index);
        });
        doneButton.addEventListener('click', function () {
            completed(li);
        });

        // Add the buttons to the list item
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        li.appendChild(doneButton);
        list.appendChild(li);
    });
}

function completed(li) {
    
    if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
    } else {
        li.style.textDecoration = "line-through";
        score = score + 5;
        document.getElementById('score').innerHTML = score;
    }
}

function deleteItem(index) {
    score = score + 5;
    document.getElementById('score').innerHTML = score;
    todoList.splice(index, 1); // Remove the item from the array
    renderList(); // Rebuild the list
}

// Edit the item at the given index and prompt the user for a new value
function editItem(index) {
    todoList[index] = prompt("Edit your item", todoList[index]);
    renderList();
}
addButton.addEventListener("click", createItem);
