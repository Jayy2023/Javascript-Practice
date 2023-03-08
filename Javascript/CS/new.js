const nav1 = document.createElement('nav');
let List = ["Home", "Portfolio", "About", "Contact", "Privacy Policy"];
const dom = document.getElementById('dom');
dom.appendChild(nav1);
List.forEach((item)=>{
    let a = document.createElement('a');
    a.innerText = item;
    nav1.appendChild(a);
});
const renderHome = ()=>{
    const home = document.getElementById('home');
    home.onclick = ()=>{
        
    }
}








