const services = [
    {name:"Dry Cleaning",price:200},
    {name:"Wash & Fold",price:100},
    {name:"Ironing",price:30},
    {name:"Stain Removal",price:500},
    {name:"Leather & Suede Cleaning",price:999},
    {name:"Wedding Dress Cleaning",price:2800}

]


const btn = document.querySelectorAll(".add-remove")
const content = document.querySelector(".item-content")
const table = document.querySelector(".selected-items")
const whole_table = document.querySelector(".item-list")
let amount = document.querySelector(".total-amount");
const form = document.querySelector(".warning");

let cart= [];
let flag=0;
        // document.getElementById("name").disabled = true;
        // document.getElementById("email").disabled = true;
        // document.getElementById("number").disabled = true;
        function resetCart() {
            // clear cart array
            cart = [];
            flag = 0;
        
            // clear table
            table.innerHTML = "";
            amount.innerText = "0";
            table.style.display = "none";
            content.style.display = "block";
            whole_table.style.minHeight = "auto";
        
            // reset all add/remove buttons
            btn.forEach(button => {
                button.innerHTML = `Add item <ion-icon name="add-circle"></ion-icon>`;
            });
        
            // disable form inputs again
            ["name", "email", "number"].forEach(id => {
                document.getElementById(id).disabled = true;
                document.getElementById(id).value = "";  // optional: clear fields
            });
        }
        

        ["name","email","number"].forEach(id =>{
            document.getElementById(id).disabled=true;
        })
        form.onclick = (e) =>{
            if(flag==0){
            
             if(document.getElementById("warn-message"))return;
             e.preventDefault();
            
            const m = document.createElement("p");
            m.id = "warn-message";
            m.innerText="🛈 Please add items to book.";
            form.append(m);
            setTimeout(() => m.remove(), 2000);
            }
        }
        document.getElementById("sub").onclick = (e) => {

    // Remove old message
    const oldMsg = document.getElementById("warn-message");
    if (oldMsg) oldMsg.remove();

    // Block submit if cart empty
    if (flag == 0) {
        e.preventDefault();
        const m = document.createElement("p");
        m.id = "warn-message";
        m.innerText = "🛈 Please add items to book.";
        form.append(m);
        setTimeout(() => m.remove(), 2000);
        return;
    }

    // Success
    e.preventDefault();
    const m = document.createElement("p");
    m.id = "warn-message";
    m.innerText = "✔ Email Sent";
    form.append(m);

    resetCart();
    setTimeout(() => m.remove(), 2000);
};
        

function updateCart(){
    table.innerHTML = "";
    let total = 0;
        cart.forEach((item,i)=>{
            total += item.price;
            const row = document.createElement("tr");
            row.innerHTML =`
                        <td class="sno">${i+1}</td>
                        <td class="service">${item.name}</td>
                        <td class="pr">${item.price}</td>`;
            // row.style.borderBottom = "3px solid #000000ff";
        row.style.padding = "2px"
         amount.innerText = total;
            table.appendChild(row);
        });

}

btn.forEach((button,index)=>{
button.onclick = ()=>{
    let item = services[index];
    if(button.innerHTML.includes("Add")){
      
    cart.push(item);
    button.innerHTML =`Remove item <ion-icon name="remove-circle"></ion-icon>`;
 
    flag++;
   
  
    }else{
        const pos = cart.findIndex(x=>x.name===item.name);
        if(pos!=-1){
            cart.splice(pos,1);
        }

        button.innerHTML =`Add item <ion-icon name="add-circle"></ion-icon>`;
        flag--;
        
    }
    if(flag==0){
        table.style.display = "none"
        content.style.display = "block";
        whole_table.style.minHeight  = "auto";
        amount.innerText = '0';
          ["name", "email", "number"].forEach(id => {
        document.getElementById(id).disabled = true;
      });
          
      
    }
    else{
           table.style.display = "table-row-group";
           whole_table.style.minHeight  = "206.6px";
    content.style.display = "none";
    document.getElementById("name").disabled = false;
         ["name", "email", "number"].forEach(id => {
        document.getElementById(id).disabled = false;
      });
      
      // remove old warning if exists
      const oldMsg = document.getElementById("warn-message");
      if (oldMsg) oldMsg.remove();
   }
   
   
    updateCart();

  
}
});