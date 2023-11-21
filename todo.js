const inputBox = document.getElementById('input-box');
const result = document.getElementById('list-container');

// 할 일 추가 함수 
function addTodo(){
    if(inputBox.value === ''){  
        alert('Please enter a task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        result.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
    save();
}

// 할 일 목록 만들기 이벤트 리스너 
result.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
       e.target.classList.toggle('checked');
       save();
    } 
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);


//로컬 스토리지 저장 및 불러오기 
function save(){
    localStorage.setItem("todoData", result.innerHTML);
}

function showTask(){
    result.innerHTML = localStorage.getItem("todoData");
}

showTask();