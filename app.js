const darkmodeBtn = document.querySelector("#darkmodeBtn");

darkmodeBtn.addEventListener('click', () =>{
    if(document.body.classList.contains("light")){
        document.body.classList.remove("light");
        darkmodeBtn.textContent = "Dark"; 
    } else {
        document.body.classList.add("light");
        darkmodeBtn.textContent = "Light";
    }
})

const searchInp = document.getElementById("searchInp");
const submitBtn = document.getElementById("submitBtn");
const productsListt = document.getElementById("productsListt");
const todoForm = document.getElementById("todoForm");

let todoArr = []

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    todoArr.push(searchInp.value);
    searchInp.value = "";
    createTodos(todoArr);
})

function createTodos(data) {
    productsListt.innerHTML = "";

    data.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("list-item");
        li.textContent = item;
        
        li.addEventListener('dblclick', () => { 
            deleteTodo(item);
        });

        productsListt.appendChild(li);
    });
}

function deleteTodo(item){
    console.log(todoArr, item);
    let index = todoArr.indexOf(item);
    console.log(index);

    todoArr = todoArr.slice(0, index).concat(todoArr.slice(index + 1));

    createTodos(todoArr)
}


