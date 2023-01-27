function hello(){
    const heading = document.querySelector('h2');
    if(heading.innerHTML=== 'Hello!'){
        heading.innerHTML = 'Goodbye!';
    }else{
      heading.innerHTML = 'Hello!';
    }
}