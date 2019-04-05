document.addEventListener('DOMContentLoaded', () => {

  console.log('script loaded');

  // adding a list item
  //

  const addItemForm = document.querySelector('.add-item-form');

  const handleAddItemFormSubmit = function(evt){
    evt.preventDefault()

    // this function picks out values from the event
    const valueFinder = function(input){
      return evt.target[input].value
    };
    // this creates a new li element
    const listItem = document.createElement('li');
    
    // this sets the text content of the new element using the form values
    listItem.textContent = `You need to buy ${valueFinder('quantity')} ${valueFinder('item')} ${valueFinder('shop')} ${valueFinder('urgency')}`;

    // this adds the list item to the shopping list
    document.querySelector('.list-display').appendChild(listItem);

    // this resets the form fields to empty
    document.querySelector('form.add-item-form').reset();

  };

  addItemForm.addEventListener('submit', handleAddItemFormSubmit);

  // deleting all list items
  //

  const deleteAllButton = document.querySelector('#delete-all-button');

  const handleDeleteAllClick = function(evt){
    document.querySelector('.list-display').innerHTML = '';

  };

  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});
