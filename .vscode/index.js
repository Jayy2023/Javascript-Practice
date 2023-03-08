const output = document.querySelector('#output');
  const btn = document.querySelector('button');
  btn.onclick = handleClick;

    function handleClick(){
      for(image = 0; image < 4; image++){
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
       .then (data => {
          const url = data.message;
          let image = document.createElement('img');
          image.src = url;
          output.appendChild(image);
          // window.prompt('Select breed');
      })
     }
    }
  
  function getDogImage(){
    
  }
  