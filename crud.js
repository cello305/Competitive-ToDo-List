const crud = document.getElementById("addButton");
const userInput = document.getElementById("userInput");
const submitValue = document.getElementById("submitValue");

let todoList = []

//const addBtn = document.querySelector('.addButton')

function createItem() {
    //todoList = []
    const x = userInput.value;
    //submitValue.innerHTML = x;
    todoList.push(x)
    //userInput.value = "";
    
        submitValue.innerHTML = "Added item: " + x;
        //todoList[i].innerHTML = x;
        let list = document.getElementById("submitValue");
        for (i = 0; i < todoList.length; ++i) {
            let li = document.createElement('li');
            li.innerText = todoList[i];
            list.appendChild(li);


    console.log(todoList)
}

//document.getElementById("addButton").addEventListener("click", todoList)

function readItem(){
    console.log(todoList);
}

function updateItem(){
    // const updatedList = 
}

function deleteItem(){

}
};
crud.addEventListener ("click", createItem)