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
            let buttonX = document.createElement('deleteItem');
            // buttonX =  <button type="button">Delete Item</button>
            li.innerText = todoList[i] + " " + buttonX;
            list.appendChild(li);
            
            
          
          //James's attempt
          
        }

    function editItem(text){
       let editText = document.createTextNode("\u00D7")
       editText
      }
    }

function button() {
    
    }

    function deleteItem(){

    }

crud.addEventListener ("click", createItem)

  end_button.addEventListener("click", function() {
    paragraph.contentEditable = false;
  } );

  