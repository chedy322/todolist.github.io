var input=document.querySelector('.input');
var btn=document.querySelector('.btn');
var createtask=document.querySelector('.createtask');

btn.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('task');
    
    let li=document.createElement('li');
    li.innerText=`${input.value}`;
    task.appendChild(li);
    
    let check=document.createElement('button');
    task.classList.add('check');
    task.appendChild(check);
    check.innerHTML(<button type="button" class="btn-close" aria-label="Close"></button>);
    
    let cancel=document.createElement('button');
    task.classList.add('cancel');
    cancel.innerHTML(<button type="button" class="btn-close" aria-label="Close"></button>);
    task.appendChild(cancel);

    if(!input.value){
        alert('Please enter task');
    }else{
        createtask.appendChild(task);

    }
})