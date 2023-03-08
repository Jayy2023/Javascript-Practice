
const questionList = document.getElementById("questions-container");
const questions = [
  {
    id: 1,
    question:
      "What year did Russell Westbrook win the MVP?",
    answersOptions: [
      { answer: 2010, list: " a", correct: false },
      { answer: 2016, list: " b", correct: true },
      { answer: 2018, list: " c", correct: false },
      { answer: 2020, list: " d", correct: false },
    ],
  },
  {
    id: 2,
    question:
      "What year did Michael Jordan win his first finals MVP",
    answersOptions: [
      { answer: 1990, list: " a", correct: false },
      { answer: 1991, list: " b", correct: true },
      { answer: 2000, list: " c", correct: false },
      { answer: 1997, list: " d", correct: false },
    ],
  },
];
const renderQuestion = () => {
  questions.map(({id, question, answersOptions}) => {

    const div = document.createElement("div");
    const p = document.createElement("p");
    const output = document.createElement("div");
    p.innerText = question;
    div.appendChild(p);
  
    answersOptions.map(({list, answer, correct}) => {
      const span = document.createElement("span");
    
      span.innerHTML = `${list}. ${answer}`;
      span.setAttribute("data-answer", "");
      div.appendChild(span);
    
      const handleClick = (event) => {
      
        let styles = "";
        let result = "";
      
        if (event.target.matches("[data-answer]")) {
        
          if (correct !== true) {
            result = "WRONG";
            styles = `color: red`;
          } else {
          
            result = "CORRECT!!";
            styles = `color: green`;
          }
        }
       
        output.setAttribute("style", styles);
        output.innerText = result;
        div.appendChild(output);
      };
      span.addEventListener("click", handleClick);
    });
    questionList.appendChild(div);
  });
};
renderQuestion(); (edited) 