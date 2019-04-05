document.addEventListener('DOMContentLoaded', () => {

  console.log('script loaded');

  const addItemForm = document.querySelector('.add-item-form');

  const handleAddItemFormSubmit = function(evt){
    evt.preventDefault()

    const valueFinder = function(input){
        return evt.target[input].value
    };

    const listItem = document.createElement('li');
    listItem.textContent = `You need to buy ${valueFinder('quantity')} ${valueFinder('item')} ${valueFinder('shop')} ${valueFinder('urgency')}`;

    const shoppingList = document.querySelector('.list-display');
    shoppingList.appendChild(listItem);

    const form = document.querySelector('form.add-item-form');
    form.reset();
  };

  addItemForm.addEventListener('submit', handleAddItemFormSubmit);


  const deleteAllButton = document.querySelector('#delete-all-button');

  const handleDeleteAllClick = function(evt){
    const list = document.querySelector('.list-display');
    list.innerHTML = '';

  };

  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});
