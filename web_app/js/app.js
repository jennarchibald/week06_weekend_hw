document.addEventListener('DOMContentLoaded', () => {

  console.log('script loaded');

  const addItemForm = document.querySelector('.add-item-form');

  const handleAddItemFormSubmit = function(evt){
    evt.preventDefault()
    const itemToBuy = evt.target.item.value;
    const quantityToBuy = evt.target.quantity.value;
    const shopToGoTo = evt.target.shop.value;


    const listItem = document.createElement('li');
    listItem.textContent = `You need to buy ${quantityToBuy} ${itemToBuy} from ${shopToGoTo}.`;

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
