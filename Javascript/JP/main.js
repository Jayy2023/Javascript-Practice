function sum(num1, num2){
    return num1 + num2;
}
let sum2 = (num1, num2) =>  num1 + num2;

function isPositive(number){
    return number >= 0;
}


let isPositive2 = number => number >= 0;
 




function randomNumber(){
    return Math.random();
}

let  randomNumber = () => Math.random();




document.addEventListener("click", function(){
    console.log("click");
})


  document.addEventListener("click",  () => console.log("click"));
    
