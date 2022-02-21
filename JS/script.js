let questions = [{
        question: "question 1",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 1,
    },
    {
        question: "question 2",
        choice1: '5',
        choice2: '6',
        choice3: '7',
        choice4: '8',
        answer: 2,
    },
    {
        question: "question 3",
        choice1: '9',
        choice2: '1',
        choice3: '2',
        choice4: '3',
        answer: 3,
    },
    {
        question: "question 4",
        choice1: '4',
        choice2: '5',
        choice3: '6',
        choice4: '7',
        answer: 4,
    },
]

var questionHeaderEl = document.querySelector(".question");
var answerBoxEl = document.querySelector(".answers");
var currentQuestion = 0;
var userScore = 60;


var timerEl = document.getElementById("countdown")

function countdown() {
    var timeLeft = 10;

    var timeInterval = setInterval(function() {
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft + " seconds remaining";
                timeLeft--;
            } else if (timeLeft === 1) {
                timerEl.textContent = timeLeft + " second remaining";
                timeLeft--;
            } else {
                timerEl.textContent = " ";
                clearInterval(timeInterval);

                endQuiz();
            }
        },
        1000);
}

function startQuiz() {
    countdown();
    // document.querySelector("#start").remove();
    getNewQuestion();
}

var getNewQuestion = function() {
    if (document.querySelector(".show")) {
        document.querySelector(".show").remove();
    }
    // questionHeaderEl.removeChild(document.createElement("h1"));
    if (!questions[currentQuestion]) {
        return;
    }

    var questionEl = document.createElement("h1");
    questionEl.textContent = questions[currentQuestion].question;
    questionHeaderEl.appendChild(questionEl);


    var answersEl = document.createElement("div");
    answersEl.className = "show"

    answerBoxEl.appendChild(answersEl)

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = questions[currentQuestion].choices[i];
        answersEl.appendChild(buttonEl);
    }
}

startQuiz();