fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then (data =>  {
    let dog = data;
    let images = document.createElement('img');
    images.src = dog;
});
    