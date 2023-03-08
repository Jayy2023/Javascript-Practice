
const output = document.querySelector('#output');
const btn = document.querySelector('button');
const thePrompt = document.getElementById('prompt');
btn.onclick = handleClick;
output.onclick = handleSelection;

function handleSelection(e){
  const breed = e.target.getAttribute('data-breed');
  if(breed){
    giveFeedback(breed === answer);
  }
 
}



let breeds = [];
let answer = "";


function setRandomAnswer(){
  answer = breeds[Math.floor(Math.random() * breeds.length)]
  const prompt = document.createElement('div');
  prompt.innerText = `Which image shows the ${answer} breed?`
  prompt.style.color = "white";
  thePrompt.append(prompt)

}
function giveFeedback(isCorrect){
  const feedback = document.createElement('div');
  const message = isCorrect ? "Correct" : "Not Correct";
  feedback.innerText = `That is ${message}`
  thePrompt.append(feedback);
  
}

  async function handleClick(){
    for( let image = 0; image < 4; image++){
    const url =  await fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
     .then (data => data.message)
        const image = document.createElement('img');
        image.src = url;
        output.appendChild(image);
        image.setAttribute('data-breed', 'breed');
        breeds.push(url.split("/")[4]);
        // window.prompt('Select breed');
    }
       
   }
  console.log(breeds)
   setRandomAnswer();




    
  

  
 




