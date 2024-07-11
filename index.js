const input=document.querySelector('input')
const add_btn=document.querySelector('button')
const list=document.querySelector('ul')
let myarr=JSON.parse(localStorage.getItem('todos')) || [];
console.log(myarr);


add_btn.addEventListener('click',()=>{
    const ListItem=document.createElement('li')
    ListItem.innerHTML=`<p>${input.value}</p>
                <button>Delete</button>`
    list.appendChild(ListItem)
    const delete_btn=ListItem.querySelector('button')
    myarr.push(input.value)
    delete_btn.addEventListener('click',()=>{
        ListItem.remove();
        myarr.forEach((element,index)=>{
            if(element.todo==ListItem.querySelector('p').textContent){
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
                          <button>Delete</button>`;
    list.appendChild(ListItem);
    
    const delete_btn = ListItem.querySelector('button');
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
