let tasks = [];

const inputLink = document.getElementById("link");
const inputDesk = document.getElementById("description");
const buttonAdd = document.getElementById("button_add");
const taskList = document.getElementById("div_list");

function addTask() {
  const linkValue = inputLink.value;
  const description = inputDesk.value;
  const taskId = Date.now();
  const newTask = {
    id: taskId,
    linkValue: linkValue,
    description: description,
    likes: 0,
  };
  tasks.push(newTask);
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

function likeTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  task.likes += 1;
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("container");
    const taskCard = document.createElement("div");
    taskCard.classList.add("card");
    const taskImage = document.createElement("img");
    taskImage.src = task.linkValue;
    taskImage.alt = task.description;
    taskImage.classList.add("ronaldo");

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    const taskLikes = document.createElement("p");
    taskLikes.textContent = `Likes: ${task.likes}`;
    const taskIconsContainer = document.createElement("div");
    taskIconsContainer.classList.add("container_icon");
    const taskLikeIcon = document.createElement("img");
    taskLikeIcon.src = "./whiteLike.png";
    taskLikeIcon.classList.add("like_icon");
    taskLikeIcon.addEventListener("click", () => {
      likeTask(task.id);
    });
    const taskDeleteIcon = document.createElement("img");
    taskDeleteIcon.src = "./delete.svg";
    taskDeleteIcon.classList.add("delete_icon");
    taskDeleteIcon.addEventListener("click", () => {
      deleteTask(task.id);
    });
    taskIconsContainer.appendChild(taskLikeIcon);
    taskIconsContainer.appendChild(taskDeleteIcon);
    taskCard.appendChild(taskImage);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskLikes);
    taskCard.appendChild(taskIconsContainer);
    taskContainer.appendChild(taskCard);
    taskList.appendChild(taskContainer);
  });
}

buttonAdd.addEventListener("click", () => {
  addTask();
});
