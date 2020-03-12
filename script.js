

var quest = document.getElementById("#question")
var questions = [" What is my name?", " What program do we use to interact with the class? ", " What time does class start? "]
var button1 = document.getElementById("#Answer1")
var button2 = document.getElementById("#Answer2")
var button3 = document.getElementById("#Answer3")

var buttons = document.getElementsByClassName("btn btn-outline-primary")

var answers0 = ["A: kevin", "B: tyler", "C: Devin"]
var answers1 = ["A: Twitter", "B: Slack", "C: Instagram"]
var answers2 = ["A: 9", "B: 10", "C: 12"]
var timer = timer


function quizBody(){
    var quiz1 = questions[0] + answers0.button1
    if (questions[0] = answers0[2]){
        console.log(quiz1)

    }else {
        timer--
    }
    quizBody()
}









