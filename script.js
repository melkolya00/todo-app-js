const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

document.addEventListener ('keyup', (event)=>{
    if (event.code.toLowerCase() === 'enter'){
    addTask();
}
})

function addTask(){
    if(!inputBox.value.trim()){
        alert("You should write something!")
    }
    else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if (e.target.tagName.toLowerCase() === 'li'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName.toLowerCase() === 'span'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
localStorage.setItem('data', listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
displayData()