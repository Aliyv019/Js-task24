const input=document.querySelector('input')
const add_btn=document.querySelector('button')
const list=document.querySelector('ul')
let myarr=JSON.parse(localStorage.getItem('todos')) || [];
console.log(myarr);


add_btn.addEventListener('click',()=>{
    const ListItem=document.createElement('li')
    ListItem.innerHTML=`<div class="listitem" style="display: flex;width: 100%;justify-content: space-between;">
                    <p>${input.value}</p>
                <div>
                <button>Edit</button>
                <button>Delete</button>
                </div>
                </div>
                <div class="editlistitem" style="display: none;justify-content: space-between;">
                    <input type="text">
                    <button>Done</button>
                </div>`
    list.appendChild(ListItem)
    const edit_btn=ListItem.querySelectorAll('button')[0]
    const delete_btn=ListItem.querySelectorAll('button')[1]
    const editlistitem=ListItem.querySelector('.editlistitem')
    const listiteminside=ListItem.querySelector('.listitem')
    const done_btn=ListItem.querySelectorAll('button')[2]
    const edit_input=ListItem.querySelector('input')
    edit_btn.addEventListener('click',()=>{
        editlistitem.style.display='flex'
        listiteminside.style.display='none'
        myarr.forEach((element,index)=>{
            done_btn.addEventListener('click',()=>{
                if(element == ListItem.querySelector('p').textContent){
                    myarr[index]=edit_input.value
                    ListItem.querySelector('p').textContent=edit_input.value
                    editlistitem.style.display='none'
                    listiteminside.style.display='flex'
                    localStorage.setItem('todos', JSON.stringify(myarr));
                }
            })
        })
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

// list.innerHTML = "";
myarr.forEach((element) => {
    console.log(element);
    const ListItem = document.createElement('li');
    ListItem.innerHTML = `<div class="listitem" style="display: flex;width: 100%;justify-content: space-between;">
                    <p>${element}</p>
                <div>
                <button>Edit</button>
                <button>Delete</button>
                </div>
                </div>
                <div class="editlistitem" style="display: none;justify-content: space-between;">
                    <input type="text">
                    <button>Done</button>
                </div>`;
    list.appendChild(ListItem);
    const edit_btn=ListItem.querySelectorAll('button')[0]
    const delete_btn = ListItem.querySelectorAll('button')[1]
    const editlistitem=ListItem.querySelector('.editlistitem')
    const listiteminside=ListItem.querySelector('.listitem')
    const done_btn=ListItem.querySelectorAll('button')[2]
    const edit_input=ListItem.querySelector('input')
    edit_btn.addEventListener('click',()=>{
        editlistitem.style.display='flex'
        listiteminside.style.display='none'
        myarr.forEach((element,index)=>{
            done_btn.addEventListener('click',()=>{
                if(element == ListItem.querySelector('p').textContent){
                    myarr[index]=edit_input.value
                    ListItem.querySelector('p').textContent=edit_input.value
                    editlistitem.style.display='none'
                    listiteminside.style.display='flex'
                    localStorage.setItem('todos', JSON.stringify(myarr));
                }
            })
        })
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

