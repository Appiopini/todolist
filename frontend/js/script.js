const tbody = document.querySelector('tbody');

const fetchTask = async () => {
  const response = await fetch('http://localhost:3333/tasks');
  const tasks = await response.json;
  return tasks;
}

const createElement = (tag, innerText = '', innerHTML = '') => {
  const element = document.createElement(tag);

  if (innerText) {
    element.innerText = innerText;
  }

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  return element;
}

const creatSelect = (value) => {
  const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluída">concluída</option>
  `;

  const select = createElement('select', '', options);

  select.value = value;

  return select;

}

const task = {
  id: 1,
  title: 'Vai dar certo',
  created_at: '21 de novembro de 2023',
  status: 'pendente'
}

const createRow = (task) => {

  const { id, title, created_at, status } = task;
  
  const tr = createElement('tr');
  const tdTitle = createElement('td', title);
  const tdCreatedAt = createElement('td', created_at); 
  const tdStatus = createElement('td'); 
  const tdAction = createElement('td');

  const select = creatSelect(status);
  
  const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');

  const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

  editButton.classList.add('btn-action');
  deleteButton.classList.add('btn-action');

  tdStatus.appendChild(select);

  tdAction.appendChild(editButton);
  tdAction.appendChild(deleteButton);

  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt)
  tr.appendChild(tdStatus);
  tr.appendChild(tdAction);


  // tr.appendChild(editButton);
  tbody.appendChild(tr);

}

createRow(task)
