const section = document.getElementById("sectionContainer")
var timeLeft = 60;

var setScore = document.getElementById("userhs");

let question1 = {
    question: "How do you create a function in Javascript?",
    alt: ["$(function)", "Function()", "function()", "var function();"],
    correctAnswer1: 2
}

function generateContainer() {
    const dropUl = document.getElementById("containerid")
    console.log(dropUl)
    dropUl.remove()
    const elementUl = document.createElement("ul")
    elementUl.className = "container"
    elementUl.id = "containerid"
    section.appendChild(elementUl)
    return elementUl
}

function showQuestion(q) {
    countdown();
    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    // var alts = document.querySelectorAll(".alt");
    const elementUl = generateContainer()
    q.alt.forEach(function(element, index) {
        const elementLi = document.createElement("li")
        elementLi.setAttribute("class", "alt btn")

        elementLi.textContent = element;

        elementLi.addEventListener("click", function() {
            console.log("hello")

            if (q.correctAnswer1 == index) {
                showQuestion2(question2);

            } else {
                timeLeft = timeLeft - 10
                showQuestion2(question2);
            }
        })
        elementUl.appendChild(elementLi);
    });
};

let question2 = {
    question: "What is the sign for an array?",
    alt: ["{}", "()", "[]", "({})"],
    correctAnswer2: 2
}

function showQuestion2(q) {
    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    const elementUl = generateContainer()

    q.alt.forEach(function(element, index) {
        const elementLi = document.createElement("li")
        elementLi.setAttribute("class", "alt btn")

        elementLi.textContent = element;

        elementLi.addEventListener("click", function() {
            console.log("hello 2")


            if (q.correctAnswer2 == index) {
                showQuestion3(question3);
            } else {
                timeLeft = timeLeft - 10
                showQuestion3(question3);
                // timeLeft = (timeLeft.now() - 10000);
                // minus points and go to next question (2) 
            }
        })
        elementUl.appendChild(elementLi);
    });
};


let question3 = {
    question: "How do you create a button in html?",
    alt: ["btn", "sumbit", "bttn", "button"],
    correctAnswer3: 3
}

function showQuestion3(q) {

    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    const elementUl = generateContainer()

    q.alt.forEach(function(element, index) {
        const elementLi = document.createElement("li")
        elementLi.setAttribute("class", "alt btn")

        elementLi.textContent = element;

        elementLi.addEventListener("click", function(e) {
            console.log(e.target)
            console.log("hello there")

            if (q.correctAnswer3 == index) {
                showQuestion4(question4);
            } else {

                timeLeft = timeLeft - 10
                showQuestion4(question4);
            }
        })
        elementUl.appendChild(elementLi);
    });
};


let question4 = {
    question: "How do you show 'something' in a console?",
    alt: ["print", "log()", "console.log()", "Trick question, you cant!"],
    correctAnswer4: 2
}

function showQuestion4(q) {

    var qDiv = document.getElementById("questions");
    qDiv.textContent = q.question;

    const elementUl = generateContainer()

    q.alt.forEach(function(element, index) {
        const elementLi = document.createElement("li")
        elementLi.setAttribute("class", "alt btn")

        elementLi.textContent = element;

        elementLi.addEventListener("click", function(e) {

            if (q.correctAnswer4 == index) {
                setScore = timeLeft
                localStorage.setItem("userscore", setScore)
                endGame();
            } else {

                timeLeft = timeLeft - 10
                setScore = timeLeft
                localStorage.setItem("userscore", setScore)
                endGame();
            }
        })
        elementUl.appendChild(elementLi);
    });
};


function endGame() {
    // userHs.textContent = setScore
    location.href = "./highscores.html";
    console.log(setScore)


    // console.log(timeLeft)
}

// window.addEventListener("load", () => {
const dropUl = document.getElementById("containerid")
if (dropUl) {
    showQuestion(question1);
}

// });


var timerEl = document.getElementById("countdown")

function countdown() {
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