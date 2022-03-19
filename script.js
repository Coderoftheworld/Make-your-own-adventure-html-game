var choiceOne = document.getElementById("choice1")
var choiceTwo = document.getElementById("choice2")
var question = document.getElementById("question")
var points = 0

function updateCounter() {
    document.getElementsByName("pointCount")[0].innerHTML = `${points} points`
}

function changeOptions(_question, choice1, choice2) {
    question.innerHTML = _question
    choiceOne.innerHTML = choice1
    choiceTwo.innerHTML = choice2
}

function win() {
    changeOptions("You won! Play again?", "Yes", "No")
    choiceOne.onclick = function() {
        location.reload()
    };
}

function lose(message) {
    changeOptions(message, "Yes", "No")
    choiceOne.onclick = function() {
        location.reload()
    };
}

function left() {
    changeOptions("You went left. A few miles later, you encounter a mother polar bear with cubs to protect. What do you do?", "Stand tall and make loud noises", "Run")
    choiceTwo.onclick = function() {
        lose('It easily outran you. You lost. Play again?')
    };
    choiceOne.onclick = function() { 
        points += 3;
        updateCounter()
        igloo() 
    }
}

function right() {
    changeOptions('You see an igloo in the distance, but a big frozen lake blocks your path. Do you...', "Walk on the ice", "Walk around it")
    choiceOne.onclick = function() {
        lose("The ice breaks under your feet. You lost. Play again?")
    }
    choiceTwo.onclick = function() { 
        points+=2; 
        updateCounter()
        igloo();  
    }
}
function igloo() {
    changeOptions("You enter the igloo to find 2 fresh fish, along with some firewood. Do you:", "Eat them raw and go away", "Take the risk of someone finding you and cook them")
    choiceTwo.onclick = function() { 
        lose("Someone finds you and reports you to the police. You lose. Try again?")     }
    choiceOne.onclick = function() {
        points+=5; 
        updateCounter()
        airport()
    }
}

function airport() {
    changeOptions("No one caught you eating the fish. 2 hours of walking in the freezing cold, you're desperate. Then you find an airport! But there's a pack of wolves near the entrance, seemingly feeding on prey. Do you:", "Try to go in unnoticed", "Wait it out")
    choiceOne.onclick = function() { 
        lose("The wolves quickly notice you. Let's just say that they had some extra food that day. Try again?") 
    }
    choiceTwo.onclick = win
}