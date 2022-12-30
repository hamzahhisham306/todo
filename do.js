 let inputcontent=document.querySelector('.add-task input');
 let plusSpan=document.querySelector('.plus');
 let tasks_content=document.querySelector('.tasks-content');
 let tasks_count=document.querySelector('.tasks-count span');
 let tasks_completed=document.querySelector('.tasks-completed span');
 let taskNumber=0;



 plusSpan.onclick=createTask;
// plusSpan.addEventListener('click',function(){
//   createTask();
// });




function createTask(){
  let task_box=document.createElement('div');
  task_box.className='task-box';
  let NewSpan=document.createElement('span'); 
  let TextSPan=document.createTextNode(inputcontent.value);
  NewSpan.appendChild(TextSPan);
  task_box.appendChild(NewSpan);
  inputcontent.value='';
  let DeleteButton=document.createElement('span');
  DeleteButton.className='delete';
  let DeleteText=document.createTextNode("Delete");
  DeleteButton.appendChild(DeleteText);
  task_box.appendChild(DeleteButton);
  tasks_content.appendChild(task_box);
  taskNumber++;
  //tasks_count.innerHTML=taskNumber;
  calauteTasks();
}
document.addEventListener('click',function(e){

  if(e.target.className==="delete"){

    e.target.parentNode.remove();
  
  }
  if(e.target.classList.contains("task-box")){
    
    e.target.classList.toggle("finshed");
  
  }
  calauteTasks();


});



function calauteTasks(){
  tasks_count.innerHTML=document.querySelectorAll('.tasks-content .task-box').length;
   
  tasks_completed.innerHTML=document.querySelectorAll('.tasks-content .finshed').length;
}





multiplicationTable=function(size){




}

let array=[[],[],[]];

for(let i=1,o=0;i<=3,o<=2;i++,o++){
  for(let j=1,x=0;j<=3,x<=2;j++,x++){
    array[o][x]=j*i;
  }
}
console.log(array);
multiplicationTable = function(size) {
  const array=[];
  for(let i=1;i<=size;i++){
    let num=Array(size).fill(1).map((el,index)=>(el+index)*i);
    array.push(num);
  }
  return array;
}
console.log(multiplicationTable(3))

let s=4
let num=Array(s).fill(3);
console.log(num);
// let theInput=document.querySelector(".add-task input");
// let theAddButton=document.querySelector(".add-task .plus");
// let tasksContainer=document.querySelector(".tasks-content");
// let taskCount=document.querySelector(".tasks-count span");
// let taskCompleted=document.querySelector(".tasks-completed span");


// // Focus on Input Field
// window.onload=function(){
//     theInput.focus();
//     calculateTasks();

// };
// // Adding The Task

// theAddButton.onclick=function(){
//   // if Input is Empty

//   if(theInput.value===""){

//       console.log("No Value");

//   }
//   else{
//     let noTaskMsg=document.querySelector(".no-tasks-message");
    
//     // Check if span with no task message is exist
//     if(document.body.contains(document.querySelector(".no-tasks-message"))){
//     // Remove Task Message 
//     noTaskMsg.remove();
//     }
//     // Create Span Elemet
//     let mainspan=document.createElement("span");
//     // Creaete Delete button
//     let DeleteElment=document.createElement("span");
//     // create the span text
//     let text=document.createTextNode(theInput.value);
//     // create text to delete button 
//     let deletetext=document.createTextNode("Delete");

//     // Add text to span
//     mainspan.appendChild(text);
//     // add class to span
//     mainspan.className='task-box';

//     // add text to button
//     DeleteElment.appendChild(deletetext);

//     // add class delete button
//     DeleteElment.className='delete';

//     // add delete button to span

//     mainspan.appendChild(DeleteElment);

//     // add the task to the container
//     tasksContainer.appendChild(mainspan);

//     // empty the input
//     theInput.value="";

//     // calaute task
//   }
   

// };

// document.addEventListener('click',function(e){

// // Delete Task
// if(e.target.className=="delete"){
 
//     e.target.parentNode.remove();
//     //Check Number of task inside the container
//     if(tasksContainer.childElementCount==0){
//       createNoTasks();
//     }
  
// }
// // Finish task
// if(e.target.classList.contains("task-box")){
//     //Toggle Class 'Finished'
//     e.target.classList.toggle("finshed");
// }
// calculateTasks()

// });

// // Function To creat No task message
// function createNoTasks(){
//   // create Message span elment
//   let msgSpan=document.createElement("span");

//   //create the text mesage
//   let msgText=document.createTextNode("No  Tasks to Show");

//   // add text to messag elemet 
//   msgSpan.appendChild(msgText);

//   // add class to message
//   msgSpan.className='no-tasks-message';
//   // append the message span elemt to the task contaier
//   tasksContainer.appendChild(msgSpan);
// }


// function calculateTasks() {

//   // Calculate All Tasks
//   taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

//   // Calculate Completed Tasks
//   taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

// }

// // Functon to calute task
// function caluatetasks(){
//   // calcute all tasks
//   taskCount.innerHTML=document.querySelectorAll(".tasks-content .task-box").length;


//   // calciate compted task
//   taskCompleted.innerHTML=document.querySelectorAll(".tasks-content .finshed").length;

// }