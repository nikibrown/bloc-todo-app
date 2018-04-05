function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  
  let id = 0;
  
  function createNewToDo() {
    // access text input 
    const newToDoText = document.getElementById('newToDoText');
    
    // if newToDoText is empty 
    if (!newToDoText.value) { return; }
    
    // push value of newToDoText to array
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    
    // clear text input
    newToDoText.value = '';
    
    renderTheUI();
  }
  
  
  function renderTheUI() {
    // access the todolist UL
    const toDoList = document.getElementById('toDoList');
    
    // set new li to blank
    toDoList.textContent = '';
    
    
    // for each
    toDos.forEach(function(toDo) {
      // create LI
      const newLi = document.createElement('li');
      // create checkbox
      const checkbox = document.createElement('input');
      // make checkbox a checkbox
      checkbox.type = "checkbox";
      
      // set text
      newLi.textContent = toDo.title;
      
      // create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "x"
      
      // append li checkbox deleteButton
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      
      deleteButton.addEventListener('click', event => {     
        event.target.parentNode.remove();
      });
      
    });
  }
  
  // run stuff when the form is submitted
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  
  

}

window.onload = function() {
  onReady();
};