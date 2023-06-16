const tasks = [
	'Running',
	'Programming',
	'REceive a parsle',
	'Meeting with friend',
	'Learning englisg/korean',
	'Prepare for the test',
];

const renderListItems = listItems => {
	const listElem = document.querySelector('.list');

	const listItemsElems = listItems.map(itemText => {
		const listItemElem = document.createElement('li');
		listItemElem.classList.add('list__item');
		const checkboxElem = document.createElement('input');
		checkboxElem.classList.add('list__item-checkbox');
		checkboxElem.setAttribute('type', 'checkbox');

		listItemElem.append(checkboxElem, itemText);
		return listItemElem;
	});

	listElem.append(...listItemsElems);
}

renderListItems(tasks);