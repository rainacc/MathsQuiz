let correctAnswer = 0;
let printQuestion = "Blank Question"
let score = 0
let questionCount = 0


function easyQuiz(){
    //generate the random maths question
    let numberA = Math.floor(Math.random()*10) +1;
    let numberB = Math.floor(Math.random()*10) +1;
    let addOrSubtract = Math.floor(Math.random()*2) +1;
    if (addOrSubtract === 1){
        correctAnswer = numberA + numberB;
        printQuestion = (numberA + " + " + numberB +" = ?");
    } else if(addOrSubtract === 2){
        correctAnswer = numberA - numberB;
        printQuestion = (numberA + " - " + numberB +" = ?");
    }

    //draw out the question content
    let canvas=document.getElementById("questionScreen");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "70px Arial";
    context.fillText(printQuestion, 30,90);

}

function normalQuiz(){
    //generate the random maths question
    let numberA = Math.floor(Math.random()*100) +1;
    let numberB = Math.floor(Math.random()*100) +1;
    let addOrSubtract = Math.floor(Math.random()*2) +1;
    if (addOrSubtract === 1){
        correctAnswer = numberA + numberB;
        printQuestion = (numberA + " + " + numberB +" = ?");
    } else if(addOrSubtract === 2){
        correctAnswer = numberA - numberB;
        printQuestion = (numberA + " - " + numberB +" = ?");
    }

    //draw out the question content
    let canvas=document.getElementById("questionScreen");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "55px Arial";
    context.fillText(printQuestion, 20,90);
}


function hardQuiz(){
    //generate the random maths question
    let numberA = Math.floor(Math.random()*100) +1;
    let numberB = Math.floor(Math.random()*10) +1;
    let numberC = Math.floor(Math.random()*100) +1;
    correctAnswer = numberA * numberB + numberC;
    printQuestion = (numberA + " * " + numberB + " + "+ numberC + " = ?");


    //draw out the question content
    let canvas=document.getElementById("questionScreen");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "45px Arial";
    context.fillText(printQuestion, 25,90);
}


function checkAnswer(difficulty){
    let input = document.getElementById("answerBox"); //get user's input
    let inputValue = parseInt(input.value);
    if (inputValue === correctAnswer){
        score = score + 1; //score+1 if correct answer was given by the user
        alert("You are correct!");
        } else {
            alert("Incorrect answer");
        }

        let board=document.getElementById("scoringBoard");//print score out
        let boardContext = board.getContext("2d");
        boardContext.clearRect(0, 0, board.width, board.height);
        boardContext.font = "40px Arial";
        boardContext.fillText(score, 15,40);

        questionCount = questionCount + 1
        if (difficulty=== "easy" && questionCount <= 4) {
            easyQuiz()
        } else if (difficulty=== "normal" && questionCount <= 4) {
            normalQuiz()
        } else if (difficulty=== "hard" && questionCount <= 4) {
            hardQuiz()
        } else if (questionCount === 5){
            endingPage()
        }

}

function endingPage(){
    document.getElementById("next").className = "hidden";
    document.getElementById("answerBox").className = "hidden";
    document.getElementById("questionScreen").className = "hidden";
    document.getElementById("question").className = "hidden";
    document.getElementById("notes").className = "hidden";
    document.getElementById("end").className = "show";
    document.getElementById("welldone").className = "show";

}

