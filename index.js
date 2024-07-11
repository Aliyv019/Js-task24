const input=document.querySelector('input')
const add_btn=document.querySelector('button')
const list=document.querySelector('ul')
let myarr=JSON.parse(localStorage.getItem('todos')) || [];
console.log(myarr);


add_btn.addEventListener('click',()=>{
    const ListItem=document.createElement('li')
    ListItem.innerHTML=`<p>${input.value}</p>
                <div>
                <button>Edit</button>
                <button>Delete</button>
                </div>`
    list.appendChild(ListItem)
    const edit_btn=ListItem.querySelectorAll('button')[0]
    const delete_btn=ListItem.querySelectorAll('button')[1]
    edit_btn.addEventListener('click',()=>{
        const new_todo=prompt("enter new todo:")
        myarr.forEach((item, index) => {
            if (item == ListItem.querySelector('p').textContent) {
                myarr[index]=new_todo
                ListItem.querySelector('p').textContent=new_todo
                localStorage.setItem('todos', JSON.stringify(myarr));
            }
        });
    })
    myarr.push(input.value)
    delete_btn.addEventListener('click',()=>{
        ListItem.remove();
        myarr.forEach((element,index)=>{
            if(element==ListItem.querySelector('p').textContent){
                myarr.splice(index,1)
            }
        })
        localStorage.setItem('todos',JSON.stringify(myarr))
    })
    localStorage.setItem('todos',JSON.stringify(myarr))
    input.value=""
})

list.innerHTML = "";
myarr.forEach((element) => {
    console.log(element);
    const ListItem = document.createElement('li');
    ListItem.innerHTML = `<p>${element}</p>
                <div>
                <button>Edit</button>
                <button>Delete</button>
                </div>`;
    list.appendChild(ListItem);
    const edit_btn=ListItem.querySelectorAll('button')[0]
    const delete_btn = ListItem.querySelectorAll('button')[1]
    edit_btn.addEventListener('click',()=>{
        const new_todo=prompt("enter new todo:")
        myarr.forEach((item, index) => {
            if (item == ListItem.querySelector('p').textContent) {
                myarr[index] = new_todo;
                ListItem.querySelector('p').textContent = new_todo;
                localStorage.setItem('todos', JSON.stringify(myarr));
            }
        });
        localStorage.setItem('todos', JSON.stringify(myarr));
    })
    delete_btn.addEventListener('click', () => {
        ListItem.remove();
        myarr.forEach((item, index) => {
            if (item == ListItem.querySelector('p').textContent) {
                myarr.splice(index, 1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(myarr));
    });
});

