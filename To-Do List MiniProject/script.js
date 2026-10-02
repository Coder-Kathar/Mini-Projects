let list = new Array();
function addTask(){
    let submit = document.getElementById("submit");
    let addingTask = document.getElementById("addTask");
    let todoList = document.getElementById("todolist");
    if(addingTask.value != ""){
        list.push(addingTask.value);
        todoList.innerHTML += 
            `<li id="${list.length-1}">
                <button onclick="complete(${list.length-1})">
                    ${addingTask.value}
                </button>
            </li>`;
        addingTask.value = "";
    }
}
function complete(id){
    let donelist = document.getElementById("donelist");
    donelist.innerHTML += "<li>" + list[id] + "</li>";
    document.getElementById(id).style.display = "none";
}