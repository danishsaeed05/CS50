let checked = 0;
let unchecked = 0;
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function addTodo(todo) {
  checked += 1;
  unchecked += 1;

  // create item, part of unordered list. Which we will append at the end
  const item = document.createElement('li');

  //checkbox
  const checkBox = document.createElement('input');
  //add attribute
  checkBox.setAttribute('type', 'checkbox');

  
  //event listener
  checkBox.addEventListener('click', function(e) {
   checkBoxUpdate(e)
  });
  item.appendChild(checkBox);


  // append div with the todo parameter to the item
  const divGroup = document.createElement('div');
  divGroup.textContent = todo;
  item.appendChild(divGroup);


  // Create delete button inside list item
  const button = document.createElement('button');
  button.textContent = 'Detele';
  //event listener for the delete button
  button.addEventListener('click', function() {
    deleteItem(item)
  });

  //append the button into each item 
  item.appendChild(button);
  // Append append the item as child to the list
  list.appendChild(item);
  
  //update counter
  uncheckedCountSpan.innerHTML = unchecked;
  itemCountSpan.innerHTML = checked;
}


function checkBoxUpdate(e)
{
  if (e.target.checked) {
    unchecked -= 1;
    e.target.parentElement.childNodes[1].setAttribute('class', 'isChecked');
  }
  else {
    unchecked += 1;
    e.target.parentElement.childNodes[1].setAttribute('class', '');
  }
  //update counter
  uncheckedCountSpan.innerHTML = unchecked;
  itemCountSpan.innerHTML = checked;
}


function deleteItem(item){
  const confirmation = confirm('Are you sure you want to DELETE this TODO item?')
  
  //if item is not checked then subtract from unchecked otherwise from checked
  if (!item.childNodes[0].checked) {
    unchecked -= 1;
  }
  item.parentNode.removeChild(item);
  checked -= 1;

  //update counter
  uncheckedCountSpan.innerHTML = unchecked;
  itemCountSpan.innerHTML = checked;
}

function newTodo() {
  // function called from HTML
  const todo = prompt('Please add a TODO item');
  if (todo) 
  addTodo(todo)
}