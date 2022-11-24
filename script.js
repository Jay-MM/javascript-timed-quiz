// Acceptance Criteria
//     WHEN all questions are answered or the timer reaches 0
//     THEN the game is over
//     WHEN the game is over
//     THEN I can save my initials and score

var myNav = document.querySelector('mynav')
var timerEl = document.getElementById('timer');
var main = document.getElementById('mainContent')
var h1 = document.getElementById('h1')
var p = document.getElementById('p')
var button = document.getElementById('button')
var startBtn = document.getElementById('startBtn')
var newDiv = document.createElement('div')
var questionList = document.createElement('ol');
var answerBtn = document.getElementById('answerBtn')
var contentContainer = document.getElementById('content-container')
var countdownTimer;
var highScore = document.getElementById('highscore')
var highScores = document.getElementById('highscores')

var questionArray = 0;

var timeLeft = 75;

var newScore = 0
var questions = [
    {
        question: "What is Javascript?",
        choices: ["A poem about coffee", "a set of data elemnts enclosed in parentheses", "The structure of a website", "A server-side programming language that is used to interact with web applications"],
        answer: "A server-side programming language that is used to interact with web applications"
    },
    {
        question: "What is a JavaScript Data type?",
        choices: ["Number", "Boolean", "Object", "String", "Unindentified", "all of the above"],
        answer: "all of the above"
    },
    {
        question:" What is 'this' keyword in JavaScript?",
        choices:["The object from where it was called", "The window", "The browser", "the machine the user is using", "The console"],
        answer:"The object from where it was called",
    },
    {
        question:"What is === operator?",
        choices:["Equals to", "Really, really equals", "A strict equality operator", "A long equals sign"],
        answer:"A strict equality operator",
    },
    {
        question:" What are all the types of Pop up boxes available in JavaScript?",
        choices:["Alert", "Confirm", "Prompt", "All of the above", "None of the above"],
        answer:"All of the above",
    },
    {
        question:"in what ways can a JavaScript code be involved in an HTML file?",
        choices:["Inline", "Internal", "External", "All of the above", "None of the above"],
        answer:"All of the above",
    }
];

    function checkAnswer() {
        if (this.value === questions[questionArray].answer) {
            console.log("That's right!")
        } else {
            console.log("Oops! That is incorrect!  10 seconds have been docked!")
            timeLeft -= 10;
            timerEl.textContent = timeLeft;
        }
    
    
        questionArray++;
        
        if (questionArray === questions.length) {
            newScore = timeLeft;
        } else {
            renderQuestions();
        }
    }
    
    function renderQuestions() {
        var newQuestion = questions[questionArray];
        questionList.textContent = newQuestion.question;
        newQuestion.choices.forEach(element => {
        var li = document.createElement('button');
        li.textContent = element;
        li.setAttribute("value", element);
        li.onclick = checkAnswer;
        questionList.appendChild(li);
        li.setAttribute("class", "answerBtn")
    });
}


startBtn.addEventListener("click", function() {

    main.removeChild(p)
    button.removeChild(startBtn)
    highScores.removeChild(highScore)

    renderQuestions()
    console.log(renderQuestions.textContent)

    main.appendChild(newDiv)
    newDiv.appendChild(questionList)
    questionList.setAttribute("class", "content-container")

    countdownTimer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        // game over function
    };
}, 1000);
})