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

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    
    // set the text of the todo
    newLi.textContent = title;

    // add the checkbox to the li
    newLi.appendChild(checkbox);

    // add the li to the ul
    toDoList.appendChild(newLi);
    
    // empty the input
    newToDoText.value = '';
    
  });
}

window.onload = function() {
  onReady();
};