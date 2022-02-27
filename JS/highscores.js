localStorage.getItem("userscore")
var setScore = localStorage.getItem("userscore");


var initials = document.getElementById("contact-initials").value;
localStorage.setItem("highscorein", initials);
localStorage.getItem("highscorein")
var initials = localStorage.getItem("highscore")


document.getElementById("userhs").innerHTML = setScore;
document.getElementById("userhsin").innerHTML = initials;