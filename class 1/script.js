const rightarrow = document.querySelector('#right-arrow')
const leftarrow = document.querySelector('#left-arrow')
const firstbasket = document.querySelector('#firstbasket span')
const secondbasket = document.querySelector('#secondbasket span')

const totalbasket = 0;
let firstbasketcount = totalbasket
let secondbasketcount = 0
firstbasket.innerText = totalbasket;
secondbasket.innerText = totalbasket - secondbasketcount;

rightarrow.addEventListener('click',()=>{
    // if(firstbasketcount > 0){
        firstbasketcount--;
         secondbasketcount ++;
        firstbasket.innerText = totalbasket;
        secondbasket.innerText = secondbasketcount;   
    // }
})
    leftarrow.addEventListener('click',()=>{
        // if(secondbasketcount > 0){
        firstbasketcount++;
        secondbasketcount --;
        firstbasket.innerText = firstbasketcount;
        secondbasket.innerText = secondbasketcount; 
    // }
})