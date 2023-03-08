

// Write Javascript code!
const div = document.createElement('div');
const app = document.getElementById('app');

const nav = ['Home','Portfolio', 'About', 'Contact', 'Privacy Policy']

nav.forEach((item, index) => {
  let navItem = document.createElement("a");
  navItem.innerText = item;
  if(index !== 0){
    navItem.classList.add('nav');
  }
  app.append(navItem) 
});

















 

