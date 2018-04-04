function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');
    
    // Add a delete button which the user can use to delete to-dos they no longer need.
    let deleteButton = document.createElement('button');
    
    // Add text to deleteButton
    deleteButton.textContent = "x";

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
    
    
    // Bloc's suggested solution 
    // deleteButton.addEventListener('click', () => {
    //  newLi.parentNode.removeChild(newLi);
    // });
    
    // Regular function expression solution with this
    // deleteButton.addEventListener('click', function() {
    //   this.parentNode.remove();
    // });
    
    // es6 arrow function using event.target
    deleteButton.addEventListener('click', event => {     
      event.target.parentNode.remove();
    });
    
  });
}

window.onload = function() {
  onReady();
};