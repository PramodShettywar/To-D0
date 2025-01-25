const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

function addTask(){
    let task=inputBox.value;
    if(task){
        let listItem=document.createElement('li');
        listItem.innerHTML=task;
        listContainer.appendChild(listItem);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        listItem.appendChild(span);
        
        
    }
    else{
        alert('Please enter the task!');
    }
    inputBox.value='';
    SaveData();
}

listContainer.addEventListener('click',function(e){
   if(e.target.tagName==='LI'){
       e.target.classList.toggle('checked');
       SaveData();
   }
   else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    SaveData();
   }
},false);

function SaveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showData();







