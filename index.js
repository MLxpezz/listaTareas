const taskName = document.getElementById('task-name');
const addTask = document. querySelector('.add-task');
const taskList = document.querySelector('.to-do-list');
const message = document.querySelector('.message');
const deleteAll = document.querySelector('.delete-all');

let countTask = 0;


addTask.addEventListener('click', e => {
  addTasks();
});

deleteAll.addEventListener('click', e => {
  deleteAllTask();
});


const addTasks = () => {

  const taskText = taskName.value;
  if(!taskText) return;
  
  let newTask = document.createElement('li');
  newTask.textContent = taskText;
  newTask.classList.add('task');
  newTask.addEventListener('click', e => completeTask(newTask));

  let delTask = document.createElement('button');
  delTask.textContent = 'X';
  delTask.classList.add('delete');
  delTask.addEventListener('click', e => {
    e.stopPropagation();
    deleteTask(delTask);
  });

  newTask.appendChild(delTask);
  taskList.appendChild(newTask);

  taskName.value = '';
  message.textContent = `Tareas completadas: ${countTask}`;
  deleteAll.style.display = 'block';
};

const completeTask = (t) => {
  if(t.classList.contains('completed')) return;
  t.classList.toggle('completed');
  countTask++;
  message.textContent = `Tareas completadas: ${countTask}`;
};


const deleteTask = (b) => {
  if(countTask != 0 && b.parentNode.classList.contains('completed')) {
    countTask--;
  }
  message.textContent = `Tareas completadas: ${countTask}`;

  if(taskList.children.length-1 == 0) {
    message.textContent = 'No tienes tareas por el momento.';
    countTask = 0;
    deleteAll.style.display = 'none';
  }

  b.parentNode.remove();
}

const deleteAllTask = () => {
  message.textContent = 'No tienes tareas por el momento.';
  countTask = 0;
  deleteAll.style.display = 'none';

  taskList.innerHTML = '';
}