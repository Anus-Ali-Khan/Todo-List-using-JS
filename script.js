const button = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const input = document.getElementById("input");

const addTask = () => {
  if (input.value == "") {
    alert("You must write something");
  } else {
    const todo = document.createElement("div");
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.innerHTML = input.value;
    img.src = "images/trash.png";
    img.onclick = () => {
      img.parentElement.remove();
    };
    todoList.appendChild(todo);
    todo.appendChild(li);
    todo.appendChild(img);
  }
  input.value = "";
};

button.addEventListener("click", addTask);
