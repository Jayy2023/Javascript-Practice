// Import stylesheets
import './styles.css';

// Write Javascript code!
const app = document.getElementById('app');

const nav = ['Home','Portfolio', 'About', 'Contact', 'Privacy Policy']

nav.forEach((item)=> {
  let navItem =document.createElement("a");
  navItem.innerText = item;
  app.append(navItem);
}) 

let home = document.querySelector('a');

home.addEventListener("click", 
  function(){
    document.getElementById("body").innerHTML = 'I am Home';
  }
  );

