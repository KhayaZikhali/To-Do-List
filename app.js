// selectors 
const name = document.querySelector('#name');
const button = document.querySelector('.create');
const todolist = document.querySelector('.todo-list');
const task = document.querySelector('#task');
const notes = document.querySelector('#extra');

// trash-btn
const trash = document.querySelector('.trash-btn');
//event listeners

todolist.addEventListener('click' , deleteCheck)
//functions

function addTodo(event){
   // prevent form submission
   // create to do div
   const  toDodiv = document.createElement('div');
   toDodiv.classList.add("todo");
   const newTodo = document.createElement('li');
   newTodo.innerText = task.value;
   newTodo.classList.add('todo-item');
   toDodiv.appendChild(newTodo);
   // completed button 
   const completedbutton = document.createElement('button');
   completedbutton.innerHTML = '<i class="fa fa-check"></i>';
   completedbutton.classList.add("complete-btn");
   toDodiv.appendChild(completedbutton);
   // completed button 
   const trashbutton = document.createElement('button');
   trashbutton.innerHTML = '<i class="fa fa-trash"></i>';
   trashbutton.classList.add("trash-btn");
   toDodiv.appendChild(trashbutton);
   // append to list 
   todolist.appendChild(toDodiv);
   // clear input value 
   task.value = "" ;
   name.value = "";
   notes.value = "";
   console.log("nothings changed at all ")
};

function deleteCheck(Event){
   const item = Event.target;
   // delete todo
   if (item.classList[0] === 'trash-btn'){
      const tood = item.parentElement;
      tood.classList.add("fall");
      tood.addEventListener('transitionend', function(){
         tood.remove();
      })
   
   }
/// CHECK MARK 
else if (item.classList[0] === 'complete-btn'){
   const todo = item.parentElement;
   todo.classList.toggle('completed');
 }
}

// create a filter function for the element name todos
// this is to filter out the tasks acording to the specified parameters
 

window.addEventListener("resize",()=>{
   console.log(window.innerWidth)
} )
