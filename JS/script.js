const startButton = document.getElementById("start-btn")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const showQuestion1 = document.getElementById("question", "answer-buttons1")
const showQuestion2 = document.getElementById("question", "answer-buttons2")
const showQuestion3 = document.getElementById("question", "answer-buttons3")
const showQuestion4 = document.getElementById("question", "answer-buttons4")


function startQuiz() {
    console.log("stardsa")
    getNewQuestion();
    countdown();

}

startQuiz();

function getNewQuestion() {
    array.forEach(question => {
        showQuestion();
    });


}

function showQuestion() {
    question.classList.remove("hide");
}

function answerSelect() {

}















// var getNewQuestion = function() {
//     if (document.querySelector(".show")) {
//         document.querySelector(".show").remove();
//     }
//     // questionHeaderEl.removeChild(document.createElement("h1"));
//     if (!questions[currentQuestion]) {
//         return;
//     }

//     var questionEl = document.createElement("h1");
//     questionEl.textContent = questions[currentQuestion].question;
//     questionHeaderEl.appendChild(questionEl);


//     var answersEl = document.createElement("div");
//     answersEl.className = "show"

//     answerBoxEl.appendChild(answersEl)

//     for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
//         var buttonEl = document.createElement("button");
//         buttonEl.textContent = questions[currentQuestion].choices[i];
//         answersEl.appendChild(buttonEl);
//     }
// }

// var answerSelect() {

// }















// var questionHeaderEl = document.querySelector(".question");
// var answerBoxEl = document.querySelector(".answers");
// var currentQuestion = 0;
// var userScore = 60;


var timerEl = document.getElementById("countdown")

function countdown() {
    var timeLeft = 60;

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