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
            list.appendChild(li) + editItem();
        }

    function editItem(){
        var x = document.createElement("IMG");
        x.setAttribute("src", "img_pulpit.jpg");
        x.setAttribute("width", "10");
        x.setAttribute("height", "10");
        document.body.appendChild(x);
      }
    }

    function deleteItem(){

    }

crud.addEventListener ("click", createItem)

  end_button.addEventListener("click", function() {
    paragraph.contentEditable = false;
  } );

  