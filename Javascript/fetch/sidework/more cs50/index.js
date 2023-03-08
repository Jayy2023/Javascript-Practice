// function makeRequest(location){
//     return new Promise((resolve, reject) =>{
//         console.log(`Making Request ${location}`);
//         if(location === "Google"){
//             resolve('Google says hi')
//         }else{
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve, reject) =>{
//         console.log('Processing response')
//         resolve(`Extra Information + ${response}`)
//     })
// }
// // makeRequest('Google').then(response => {
// //     console.log('Response received')
// //    return processRequest(response)
// // }).then(processedResponse => {
// //     console.log(processedResponse)
// // }).catch(err => {
// //     console.log(err)
// // })
// async function doWork(){
//     try{
//    const response =  await makeRequest('Google')
//    console.log('Response received')
//    const processedResponse = await processRequest(response)
//    console.log(processedResponse)
//     }catch (err) {
//         console.log(err)
//     }
// }
// doWork();

  function getData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(46)
        }, 1)
    })
}
 async function start(){
    const result =  await getData();
    console.log(result)
    
}
start()
