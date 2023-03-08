
// fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err)=> {
//     console.log('rejected', err);
// })


let getDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if(response.status !== 200){
        throw new Error("Cannot fetch data");
    }
    const data = await response.json();

    return data;
    }


getDogImage().then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err.message));
    

