
let inputEl = document.querySelectorAll("input");
let userVal = [];
let divEl = document.querySelectorAll("div");

function formFeild() {
    let formValue = inputEl[0].value;
    // console.log(formValue);
    userVal.push(formValue); 
    addArryItems();
    inputEl[0].value = "";
    // console.log(userVal); 
}
// formFeild();

function addArryItems() {
    // console.log(userVal);
    divEl[0].innerHTML = "";
    for(let i = 0; i < userVal.length; i++) {
        // console.log(userVal[i]);
        divEl[0].innerHTML += `
        <p id="new_value${i}">
          ${userVal[i]}
          <button onclick="addedVal(${i})">Added</button> 
          <button onclick="delectVal(${i})">Delect</button>
        </P>`;
    }
}
// addArryItems();

let btnEl = document.querySelectorAll("button"); 
// let editIndex;

function addedVal(index) {
    // editIndex = index;
    console.log("Add the new value" , userVal);
    inputEl[0].value = userVal[index];
    btnEl[0].innerHTML = "Save";
    userVal.splice(index , 1 , inputEl[0].value);
    addArryItems();

}

function delectVal(index) {
    // console.log("Delect the current value" , index);
    userVal.splice(index, 1);
    addArryItems();
}




let todoInput = document.querySelectorAll('.new-todo')[0];
let todoListDiv = document.querySelectorAll('.todo-list');
let allTodos = [];

function add() {
    let todoVal = todoInput.value;
    allTodos.push(todoVal);
    printAllTodos();
    todoInput.value = '';
}

function printAllTodos() {
    todoListDiv[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                
            </p>
             <button onclick="editTodo(${i})">Edit</button>
             <button onclick="deleteTodo(${i})">Delete</button>
        `;
    }
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}


let editTodoDiv = document.querySelectorAll('#edit-todo-container')[0];
let addTodoDiv = document.querySelectorAll('#add-new-todo-container')[0];
let editTodoInput = document.querySelectorAll('.edit-todo')[0];
let editIndex;
function editTodo(index) {
    if(isEditing) {
        displayError();
    }
    else {
        editIndex = index;
        toggleTodoForm();
        editTodoInput.value = allTodos[index];
    }
    
     
}

function upadateTodo() {
    toggleTodoForm();  
    allTodos.splice(editIndex, 1 , editTodoInput.value);
    printAllTodos();
}

let isEditing = false;
function toggleTodoForm() {
    if (!isEditing) {
        editTodoDiv.className = "";
        addTodoDiv.className += " hide";
    }
    else {
        editTodoDiv.className += " hide";
        addTodoDiv.className = "";
    }
    isEditing = !isEditing;
}

let pEl = document.querySelector("p");
function displayError(){
    // console.log("first save edited");
    // console.log(pEl);
    pEl.innerHTML = "first save edite";
    pEl.className = "show-error"
    setTimeout(function(){
    pEl.innerHTML = "";
        
    }, 2000)
}





















// let todoInput = document.querySelectorAll('.new-todo')[0];
// let todoListDiv = document.querySelectorAll('.todo-list')[0];

// function add() {
//     let todoVal = todoInput.value;
//     printAllTodos(todoVal);
//     todoInput.value = '';
// }

// function printAllTodos(newTodoVal) {
//     let newTodoList = makeTodoListEl(newTodoVal);
//     todoListDiv.appendChild(newTodoList);
    
// }

// function makeTodoListEl(newTodoVal) {
//     let pEl = document.createElement("P");
//     let textNote = document.createTextNode(newTodoVal);
//     pEl.appendChild(textNote);

//     let delBtm = document.createElement("BUTTON");
//     let delText = document.createTextNode("Delete");
//     delBtm.appendChild(delText);
//     delBtm.setAttribute("onclick" , "deleteTodo(this)");

//     let editBtn = document.createElement("BUTTON");
//     let editText = document.createTextNode("Edit");
//     editBtn.appendChild(editText);
//     editBtn.setAttribute("onclick" , "editTodo(this)");

//     pEl.appendChild(editBtn);
//     pEl.appendChild(delBtm);

//     return pEl;
// }

// function deleteTodo(el) {
//     // console.log(pEl.parentNode.parentNode);
//     let targetEl = el.parentNode;
//     let parentEl = el.parentNode.parentNode 
//     parentEl.removeChild(targetEl);
// }   

// let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
// let todoInputContainer = document.querySelectorAll(
//     "#add-new-todo-container"
//   )[0];
// let editInputEl = document.querySelectorAll(".edit-todo")[0];

// let targetText;
//     function editTodo(el) {
//         editTodoContainer.className = "";
//         todoInputContainer.className += " hide";
//         // console.log(el.parentNode.childNodes[0].nodeValue);
//         targetText = el.parentNode.childNodes[0];
//         editInputEl.value = targetText.nodeValue;
//     }

//     // function upadateTodo() {
//     //     targetText.nodeValue = editInputEl.value;
//     //     editTodoContainer.className += " hide";
//     //     todoInputContainer.className = "";
//     //   }












// let editTodoDiv = document.querySelectorAll('#edit-todo-container')[0];
// let addTodoDiv = document.querySelectorAll('#add-new-todo-container')[0];
// let editTodoInput = document.querySelectorAll('.edit-todo')[0];
// let editIndex;
// function editTodo(index) {
//     if(isEditing) {
//         displayError();
//     }
//     else {
//         editIndex = index;
//         toggleTodoForm();
//         editTodoInput.value = allTodos[index];
//     }
    
     
// }

// function upadateTodo() {
//     toggleTodoForm();  
//     allTodos.splice(editIndex, 1 , editTodoInput.value);
//     printAllTodos();
// }

// let isEditing = false;
// function toggleTodoForm() {
//     if (!isEditing) {
//         editTodoDiv.className = "";
//         addTodoDiv.className += " hide";
//     }
//     else {
//         editTodoDiv.className += " hide";
//         addTodoDiv.className = "";
//     }
//     isEditing = !isEditing;
// }

// let pEl = document.querySelector("p");
// function displayError(){
//     // console.log("first save edited");
//     // console.log(pEl);
//     pEl.innerHTML = "first save edite";
//     setTimeout(function(){
//     pEl.innerHTML = "";
    
//     }, 2000)
// }







































