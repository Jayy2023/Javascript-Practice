// function makeRequest(location){
//     return new Promise((resolve, reject)=> {
//         console.log(`Making request to ${location}`);
//         if(location === 'Google'){
//             resolve('Google says hi')
//         }else{
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve, reject)=>{
//         console.log(`Processing ${response}`);
//         resolve(`Extra Information + ${response}`);
//     })
// }
// // makeRequest('Google').then(response => {
// //     console.log('Response Received');
// //     return processRequest(response);

// // }).then(processResponse => {
// //     console.log(processResponse)
// // }).catch(err => {
// //     console.log(err)
// // })

// async function doWork(){
//  const response =  await makeRequest('Google')
//  console.log('Response Received');
// const processedResponse =  processRequest(response)
// console.log(processedResponse)
// }
// doWork()

// function getData(){
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve('Got it!')
//         }, 1)
//     })
// }
// async function start(){
//     const result = await getData()
//     console.log(result)
// }
// start()

// async function start2(){
//   getData()
//   .then(result => {
//     console.log(result)
//   })
// }
// start2()

const output = document.querySelector('#output');
const btn = document.querySelector('button');
btn.onclick = handleClick;

  function handleClick(){
   {
    fetch("")
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
 
