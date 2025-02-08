 let todoList=[
               {
                item:'milk buy',
                dueDate:'4/10/2020'
              },
               {
                item:'go to collge',
                dueDate:'4/2/2020'
                }
              ];

displayitems();

 function addToDo(){
  let   inputElement=document.querySelector('#toDo_Input');
  let   dateElement=document.querySelector('#toDoDate');

  let todoItem=inputElement.value;
  let todoDate=dateElement.value;

  todoList.push({item: todoItem, dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  displayitems();
}

function displayitems()
{
let conteneryElement=document.querySelector('.todo_contener');
let newHtml=''

for(let i=0;i<todoList.length;i++){
  let{item,dueDate}=todoList[i];
 newHtml+=`
 <span>${item}</span>
 <span>${dueDate}</span>
 <button class="btn_delete" onclick="todoList.splice(${i},1);displayitems();">Delete</button>
 `;
}
conteneryElement.innerHTML=newHtml;


}