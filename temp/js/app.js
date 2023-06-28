import "core-js/modules/web.dom-collections.iterator.js";
const tasks = [{
  text: 'Running',
  done: true
}, {
  text: 'Programming',
  done: true
}, {
  text: 'REceive a parsle',
  done: false
}, {
  text: 'Meeting with friend',
  done: true
}, {
  text: 'Learning englisg/korean',
  done: false
}, {
  text: 'Prepare for the test',
  done: false
}];
const renderListItems = listItems => {
  const listElem = document.querySelector('.list');
  const listItemsElems = listItems.sort((a, b) => a.done - b.done).map(_ref => {
    let {
      text,
      done
    } = _ref;
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    const checkboxElem = document.createElement('input');
    checkboxElem.classList.add('list__item-checkbox');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = done;
    listItemElem.append(checkboxElem, text);
    return listItemElem;
  });
  listElem.append(...listItemsElems);
};
renderListItems(tasks);