/*function hello(){
    const heading = document.querySelector('h2');
    if(heading.innerHTML=== 'Hello!'){
        heading.innerHTML = 'Goodbye!';
    }else{
      heading.innerHTML = 'Hello!';
    }
}
*/
/*
function add(num1, num2){
  return num1 + num2;
}
console.log(add(2, 7));
function greeting(greet, name){
    return  greet + name;
}
console.log(greeting( "Hello",  " Bertha"));
*/
/*
function reverseWords(str){
  let newString = "";
  for(let i = str.length -1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}
document.write(reverseWords("Hello"));
*/
/*
const button = document.getElementById('btn');
button.addEventListener('click', () =>{
  button.innerText = "CLICKED!";
});
*/

const people = [
  {
    name: "B",
    age: 26,

  },
  {
    name: "Nevaeh",
    age: 6
  }

];
const oldestAge = people.reduce((p, c) => {
  if(c.age > p){
    return c.age;
  }
  return p;
}, 0);
console.log(oldestAge);


/*
const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((p, c) => { 
  console.log(`Previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
}, 0);
console.log(sum);
*/





