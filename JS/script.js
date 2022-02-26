// const startButton = document.getElementById("start-btn")
// const questionElement = document.getElementById("question")
// const answerButtonsElement = document.getElementById("answer-buttons")
// var showQuestion1 = document.getElementById("question", "answer-buttons1")
// var showQuestion2 = document.getElementById("question", "answer-buttons2")
// var showQuestion3 = document.getElementById("question", "answer-buttons3")
// var showQuestion4 = document.getElementById("question", "answer-buttons4")


let question = {
    title: "gato",
    alt: ["dog", "cat", "bird", "elephant"],
    correctAnswer: 1
}

function showQuestion(q) {
    var titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    var alts = document.querySelectorAll(".alt");

    alts.forEach(function(element, index) {
        element.textContent = q.alt[index];

        element.addEventListener("click", function() {

            if (q.correctAnswer == index) {
                console.log("correct");
            } else {
                console.log("wrong answer")
                    // minus points and go to next question (2)
            }
        })
    });
};

showQuestion(question);





// function startQuiz() {
//     countdown();
//     console.log("stardsa")
//         // getNewQuestion();


// }

// startQuiz();

// function getNewQuestion() {
//     if (document.getElementById("correct").clicked == true) {
//         // element.classList.add("hide");
//         console.log();
//     }
// }














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


// var timerEl = document.getElementById("countdown")

// function countdown() {
//     var timeLeft = 60;

//     var timeInterval = setInterval(function() {
//             if (timeLeft > 1) {
//                 timerEl.textContent = timeLeft + " seconds remaining";
//                 timeLeft--;
//             } else if (timeLeft === 1) {
//                 timerEl.textContent = timeLeft + " second remaining";
//                 timeLeft--;
//             } else {
//                 timerEl.textContent = " ";
//                 clearInterval(timeInterval);

//                 endQuiz();
//             }
//         },
//         1000);
// }