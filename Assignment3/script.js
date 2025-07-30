let head = document.getElementById("head");
let value = document.getElementById("value");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");

function update(){
    if(value.value==""){
        return 0;
    }
    else{
        head.innerHTML="Hello, "+value.value;
         document.getElementById("form").reset();
    }

    
}

box1.addEventListener('click',()=>{
    box1.style.backgroundColor = 'red';
     box1.style.color = 'white'; 
})
box2.addEventListener('click',()=>{
    box2.style.backgroundColor = 'blue';
     box2.style.color = 'white'; 
})
box3.addEventListener('click',()=>{
    box3.style.backgroundColor = 'green';
     box3.style.color = 'white'; 
})
box4.addEventListener('click',()=>{
    box4.style.backgroundColor = 'yellow';
    
})

