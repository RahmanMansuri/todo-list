function addTask(){

    let task = document.getElementById("task").value;
    let list = document.getElementById("taskList");

    if(task === ""){
        return;
    }
    
    const li = document.createElement('li');
    list.appendChild(li);
    li.textContent = task;

    document.getElementById("task").value = "";

    deleteTast(li);
    


    console.log(task);
}

function deleteTast(list){

    const delBtn = document.createElement("span");
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    delBtn.classList.add("delTask");
    list.appendChild(delBtn);

    delBtn.onclick = function(){
        list.remove();
    }

}