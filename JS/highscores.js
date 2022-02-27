localStorage.getItem("userscore")
var setScore = localStorage.getItem("userscore");
document.getElementById("userhs").innerHTML = setScore;


// var initials = document.getElementById("contact-initials").value;
// localStorage.setItem("highscorein", initials);
// localStorage.getItem("highscorein")
// var initials = localStorage.getItem("highscore")


// document.getElementById("userhsin").innerHTML = initials;

var intitials = document.getElementById("contact-initials").value;

localStorage.setItem("userhsin", intitials);
localStorage.getItem("userhsin", intitials);
console.log(intitials)

// document.getElementById("userhsin").textContent = intitials