// const startButton = document.getElementById("start-btn")
// const questionElement = document.getElementById("question")
// const answerButtonsElement = document.getElementById("answer-buttons")
// var showQuestion1 = document.getElementById("question", "answer-buttons1")
// var showQuestion2 = document.getElementById("question", "answer-buttons2")
// var showQuestion3 = document.getElementById("question", "answer-buttons3")
// var showQuestion4 = document.getElementById("question", "answer-buttons4")



// -- 
let question1 = {
    question: "question 1",
    alt: ["ans1", "ans1", "ans1", "ans1"],
    correctAnswer1: 1
}

function showQuestion(q) {
    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    var alts = document.querySelectorAll(".alt");

    alts.forEach(function(element, index) {
        element.textContent = q.alt[index];

        element.addEventListener("click", function() {

            if (q.correctAnswer1 == index) {
                console.log("correct");
                showQuestion2(question2);

            } else {
                console.log("wrong answedr")
                timeLeft.subtract(10, "s")
                showQuestion2(question2);
                // timeLeft = (timeLeft.now() - 10000);
                // minus points and go to next question (2) 
            }
        })
    });
    return;
};

let question2 = {
    question: "question 2",
    alt: ["ans2", "ans2", "ans2", "ans2"],
    correctAnswer2: 1
}

function showQuestion2(q) {
    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    var alts = document.querySelectorAll(".alt");

    alts.forEach(function(element, index) {
        element.textContent = q.alt[index];

        element.addEventListener("click", function() {

            if (q.correctAnswer2 == index) {
                console.log("correct");
                showQuestion3(question3);
            } else {
                console.log("wrong answedr")
                showQuestion3(question3);
                // timeLeft = (timeLeft.now() - 10000);
                // minus points and go to next question (2) 
            }
        })
    });
    return;
};


let question3 = {
    question: "question 3",
    alt: ["ans3", "ans3", "ans3", "ans3"],
    correctAnswer3: 1
}

function showQuestion3(q) {
    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    var alts = document.querySelectorAll(".alt");

    alts.forEach(function(element, index) {
        element.textContent = q.alt[index];

        element.addEventListener("click", function() {

            if (q.correctAnswer3 == index) {
                console.log("correct");
                showQuestion4(question4);
            } else {
                console.log("wrong answedr")
                showQuestion4(question4);
                // timeLeft = (timeLeft.now() - 10000);
                // minus points and go to next question (2) 
            }
        })
    });
    return;
};


let question4 = {
    question: "question 4",
    alt: ["ans4", "ans4", "ans4", "ans4"],
    correctAnswer4: 1
}

function showQuestion4(q) {
    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    var alts = document.querySelectorAll(".alt");

    alts.forEach(function(element, index) {
        element.textContent = q.alt[index];

        element.addEventListener("click", function() {

            if (q.correctAnswer4 == index) {
                console.log("correct");
                endGame();
            } else {
                console.log("wrong answedr")
                endGame();
            }
        })
    });
    return;
};




function endGame() {
    location.href = "./highscores.html";
}





showQuestion(question1);





countdown();


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
                endGame();
                clearInterval(timeInterval);

            }
        },
        1000);
}