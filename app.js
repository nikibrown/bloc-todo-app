function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    
    newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');
    
    // Add a delete button which the user can use to delete to-dos they no longer need.
    let deleteButton = document.createElement('button');
    
    // Add text to deleteButton
    deleteButton.textContent = "Delete";

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    
    // set the text of the todo
    newLi.textContent = title;

    // add the checkbox to the li
    newLi.appendChild(checkbox);
    
    // add the deleteButton to newLi
    
    newLi.appendChild(deleteButton);
    
    // add the li to the ul
    toDoList.appendChild(newLi);
    
    // empty the input
    newToDoText.value = '';
    
    // delete todo when deleteButton is clicked
    deleteButton.addEventListener('click', () => {
      // move up the DOM to the parentNode and then removes the newLi where the deleteButton is clicked
      newLi.parentNode.removeChild(newLi);
    });
    
  });
}

window.onload = function() {
  onReady();
};