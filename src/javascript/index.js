import '../sass/styles.scss';

const addItemButton = document.querySelector('.add');
const titleOfForm = document.querySelector('#title');
const descriptionOfForm = document.querySelector('#description');
const container = document.querySelector('.todo');

const createListItem = (obj) => {
  const itemWrapper = document.createElement('article');
  itemWrapper.classList = 'item';
  const item = document.createElement('li');
  item.className = 'item__description';
  item.innerHTML = `
    <p class="item__title">${obj.title}</p>
    <p class="item__desc">${obj.description}</p>
  `;
  itemWrapper.appendChild(item);
  return itemWrapper;
};

const createCompletedButton = () => {
  const completedButton = document.createElement('button');
  completedButton.className = 'item__completed';
  completedButton.textContent = 'Mark as Completed';
  return completedButton;
};

const createRemoveButton = () => {
  const removeButton = document.createElement('button');
  removeButton.classList = 'item__remove';
  removeButton.textContent = 'Remove';
  return removeButton;
};

const saveToLocalStorage = (toDoitem) => {
  let list;
  if (localStorage.getItem('list') === null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem('list'));
  }
  list.push(toDoitem);
  localStorage.setItem('list', JSON.stringify(list));
};

const removeFromLocalStorage = (toDoItem) => {
  const list = JSON.parse(localStorage.getItem('list'));
  const foundTitle = toDoItem.children[0].children[0].textContent;
  for (let i = 0; i < list.length; i++) {
    if (list[i].title === foundTitle) {
      list.splice(i, 1);
      i--;
    }
  }
  localStorage.setItem('list', JSON.stringify(list));
};

const doneOrUndoneTheTask = (event) => {
  const item = event.target.parentNode;
  const toDoItem = event.currentTarget.myParam;
  const completedButton = event.target;
  const removeButton = createRemoveButton();

  let updatedList;
  if (toDoItem.done === false) {
    updatedList = document.getElementById('completed');
    completedButton.textContent = 'Mark as Uncompleted';
    item.insertBefore(removeButton, item.children[2]);
    toDoItem.done = true;
    removeFromLocalStorage(item);
    saveToLocalStorage(toDoItem);
  } else {
    updatedList = document.getElementById('uncompleted');
    completedButton.textContent = 'Mark as Completed';
    item.children[2].remove();
    toDoItem.done = false;
    removeFromLocalStorage(item);
    saveToLocalStorage(toDoItem);
  }
  item.remove();
  updatedList.appendChild(item);

  removeButton.addEventListener('click', () => {
    item.remove();
    removeFromLocalStorage(item);
  });
};

const renderFromLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  list.forEach((element) => {
    const itemWrapper = createListItem(element);
    const completedButton = createCompletedButton();
    const removeButton = createRemoveButton();
    itemWrapper.appendChild(completedButton);

    let updatedList;
    if (element.done === false) {
      updatedList = document.getElementById('uncompleted');
      completedButton.textContent = 'Mark as Completed';
    } else {
      updatedList = document.getElementById('completed');
      completedButton.textContent = 'Mark as Uncompleted';
      itemWrapper.appendChild(removeButton);
    }
    updatedList.appendChild(itemWrapper);

    completedButton.addEventListener('click', doneOrUndoneTheTask, false);
    completedButton.myParam = element;

    removeButton.addEventListener('click', () => {
      itemWrapper.remove();
      removeFromLocalStorage(itemWrapper);
    });
  });
};

addItemButton.addEventListener('click', (event) => {
  event.preventDefault();
  const title = titleOfForm.value;
  const description = descriptionOfForm.value;
  if (title === '' || description === '') {
    alert('please fill out all fields to save your note 📄🖋');
    return;
  }

  const toDoItem = {
    title,
    description,
    done: false,
  };

  const itemWrapper = createListItem(toDoItem);
  saveToLocalStorage(toDoItem);
  const completedButton = createCompletedButton();

  titleOfForm.value = '';
  descriptionOfForm.value = '';

  itemWrapper.appendChild(completedButton);
  container.appendChild(itemWrapper);

  completedButton.addEventListener('click', doneOrUndoneTheTask, false);
  completedButton.myParam = toDoItem;
});

window.addEventListener('load', () => {
  renderFromLocalStorage();
});
