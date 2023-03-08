const counter = document.querySelector('#counter');
const addButton = document.querySelector('#add');
const subButton = document.querySelector('#sub');
let count = 1;
addButton.addEventListener('click', () => {
    count++;
  if(count === 6){
    count = 1;
  }
  const  fb = document.getElementById("fb");
  fb.addEventListener("click", function() {
    fb.style.backgroundColor = "red";
  });
  
  counter.innerHTML = count;
  });
  
  subButton.addEventListener('click', () => {
    count--;
    if(count === 0){
        count = 1;
    }
    counter.innerHTML = count;
  });

  
