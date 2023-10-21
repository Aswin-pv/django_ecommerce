
// HIDE AND SHOW DESCRIPTION

const details = document.querySelector('.d-details');
let display = 0 ;


function description(){
   if (display == 1){
    details.style.display = 'block'
    display = 0
   }else{
    details.style.display = 'none'
    display = 1
   }
}

// QUANTITY INCREASE AND DECREASE 


let qty_counter = 0 

function decreaseQty(){
   qty_counter -= 1
   if (qty_counter < 0){
      alert("Invalid selection");
      qty_counter = 0
      
   }
   document.getElementById("stock-qty").innerHTML = qty_counter
}

function increaseQty(){
   qty_counter += 1
   document.getElementById("stock-qty").innerHTML = qty_counter
}

