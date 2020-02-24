

let Input = document.querySelector('input[type="text"]');

let ul = document.querySelector('ul');
let container = document.querySelector('div');
let lists = document.querySelector('li');
let spans = document.getElementsByTagName('span');
let pencil = document.querySelector('#pencil');
let saveBtn = document.querySelector('.save');
let clearBtn = document.querySelector('.clear');


function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}

//load localestorage
function loadTodo(){
if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
}
}

//listen to event on keypress

Input.addEventListener('keypress', function(e){
    if(e.which===13){
        let li =document.createElement('li');
        let span = document.createElement('span');
        let icon = document.createElement('i');

        let newTodo = this.value;
        this.value = '';

        icon.classList.add('fas', 'fa-trash');
        span.prepend(icon);
        ul.appendChild(li).prepend(span, newTodo);

        deleteTodo();
    }
});


//line-through if checked

ul.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
});

///hide input when pencil icon is clicked

pencil.addEventListener('click', function(){
    input.classList.toggle('display');
});

//save todo for later use

saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoList', ul.innerHTML);
});

/// clear all todo 
clearBtn.addEventListener('click', function(){
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
});

deleteTodo();

loadTodo();