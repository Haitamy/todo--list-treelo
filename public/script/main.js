let ajouter = document.querySelectorAll("button")[0];
let task = document.querySelector("#todo");
task.className = "swim-lane";
let doing = document.querySelector("#doing");
doing.className = "swim-lane";
let done = document.querySelector("#done");
done.className = "swim-lane";
let idCompteur = 1
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function name() {
  let input = document.querySelectorAll("input")[0];
  value = input.value;
  let addTask = document.createElement("div");
  addTask.id='task'+idCompteur
  idCompteur+=1
  addTask.className = "todoclass";
  let taskName = document.createElement("p");
  task.appendChild(addTask);
  taskName.innerText = value;
  addTask.appendChild(taskName);
  addTask.draggable = "true";
  addTask.addEventListener("dragstart", () => {
    drag(event);
  });
}

ajouter.addEventListener("click", name);
