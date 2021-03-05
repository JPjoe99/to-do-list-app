let toDoText = document.querySelector("#to-do-text");
let textSubmit = document.querySelector("#to-do-submit");
let itemList = document.querySelector("#to-do-list");
let sortButton = document.querySelector("#sort");
let enteredText;
let itemsFromList = itemList.children;

for (let i = 0; i < itemsFromList.length; i++) {
    itemsFromList[i].firstElementChild.addEventListener("click", buttonDelete);
}

updateList();

function addDataToList(data) {
    for (let i = 0; i < data.length; i++) {
         addItemToList(data[i]);
    }
}

toDoText.addEventListener("keyup", onKeyUp);
textSubmit.addEventListener("click", onClick);
sortButton.addEventListener("click", sort);

function sort() {
    let sortedItems = [];
    for (let i = 0; i < itemsFromList.length; i++) {
        sortedItems.push(itemsFromList[i].innerText[0]);
    }
    console.log(sortedItems);
    sortedItems.sort();
    console.log(sortedItems);
    for (let i = 0; i < itemsFromList.length; i++) {
        itemsFromList[i].innerText[0] = sortedItems[i];
    }
}

function onClick(e) {
    e.preventDefault();
    fetch("https://mruxpibor1.execute-api.eu-west-2.amazonaws.com/dev/ToDoListWriteTask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({task: enteredText})
    })
    .then(res => {
        return res.json();
    })
    .then(result => {
        let data = result.body.ops;
        addDataToList(data);
    })
    .catch(error => {
        console.log(error);
    })
}

function updateList() {
    fetch("https://mruxpibor1.execute-api.eu-west-2.amazonaws.com/dev/ToDoListReadTasks", {
        method: "GET",
    })
    .then(items => {
        return items.json();
    })
    .then(data => {
        console.log(data.body);
        return addDataToList(data.body);
    })
    .catch(error => {
        console.log(error);
    })   
}

function onKeyUp(e) {
    enteredText = e.target.value;
}

function buttonDelete(e) {
    let chosenItem = e.target.parentElement;
    fetch(`https://mruxpibor1.execute-api.eu-west-2.amazonaws.com/dev/ToDoListDeleteTask`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({_id: chosenItem.id}),
    })
    .then(() => {
        itemList.removeChild(chosenItem);
    })
    .catch(error => {
        console.log(error);
    })
}

function addItemToList(item) {
    let toDoList = document.querySelector("#to-do-list");
    let newItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    newItem.id = item._id;
    newItem.className = "list-group-item";
    newItem.innerText = item.task;
    deleteButton.className = "btn btn-danger float-end";
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", buttonDelete);
    newItem.appendChild(deleteButton);
    toDoList.appendChild(newItem);
}



