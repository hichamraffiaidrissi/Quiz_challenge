
var pos = 0, quiz, quiz_status, question, selectedAnswer, options, option1, option2, option3, correct = 0;

// this is an array with objects containing each question
var questions = [
  {
      question: "Commonly used data types Do Not Include:",
      a: "Strings",
      b: "Booleans",
      c: "alerts",
      d: "numbers",
      answer: "B"
    },
  {
      question: "The condition in an if/ else statment is enclosed with_____:",
      a: "quotes",
      b: "curly brackets",
      c: "parenthesis",
      d: "square brackets",
      answer: "C"
    },
{
      question: "Arrays in JavaScript can be used to store_____:",
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: " all of the bove",
      answer: "D"
    },
{
      question: "String values must be enclosed within_____ when being assigned to variables:",
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "parenthesis",
      answer: "B"
    },

    {

        question: "A very usful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "consol.log",
        answer: "C"
      },
  

  ];


function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  quiz = get("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>You answered "+correct+" of "+questions.length+" questions correctly.</h2><button onclick='renderQuestion()'> Go back</button>";
    get("quiz_status").innerHTML = "Quiz completed";
    correct = 0;
   
    return false;
  }

  get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  option1 = questions[pos].a;
  option2 = questions[pos].b;
  option3 = questions[pos].c;
  option4 = questions[pos].d;

  quiz.innerHTML = "<h3>"+question+"</h3>";
 
  quiz.innerHTML += "<label> <input type='radio' name='options' value='A'> "+option1+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='B'> "+option2+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='C'> "+option3+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='D'> "+option4+"</label><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
 
  options = document.getElementsByName("options");
  for(var i=0; i < options.length; i++){
    if(options[i].checked){
      selectedAnswer = options[i].value;
    }
  }
 
  if(selectedAnswer == questions[pos].answer){
   
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion);

