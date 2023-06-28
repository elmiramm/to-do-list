import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from './storage.js';
const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  ;
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};
const createCheckbox = _ref => {
  let {
    done
  } = _ref;
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');
  return checkboxElem;
};
const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item');
  listItemElem.setAttribute('data-id', id);
  const checkboxElem = createCheckbox({
    done
  });
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('list-item__delete-btn');
  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  listItemElem.append(checkboxElem, textElem, deleteButton);
  return listItemElem;
};
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};