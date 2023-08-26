 const form = document.forms.formQuiz;
const question1 = form.num1;
const question2 = form.num2;
const question3 = form.checkBox3;
let score = 0;


function checkBoxQuiz(){
    let correct_answers = ["Parrot", "Eagle", "Crow"];
    let allCorrect = true;
    let checkBox3 = document.querySelectorAll('input[type="checkbox"]:checked');
    for(i = 0; i < checkBox3.length; i+=1){
        
        if(!correct_answers.includes(checkBox3[i].value)){
            allCorrect = false;
        }
    }

    if(allCorrect && checkBox3.length === 3){
        document.getElementById('answer-num3').innerText = "Question 3 answer is correct!";
        document.getElementById('answer-num3').style.display = "block";
        document.getElementById('answer-num3').style.color = "green";
        score++;
    }else if (question3.value){
        document.getElementById('answer-num3').innerText = "Question 3 answer is incorrect!"
        document.getElementById('answer-num3').style.display = "block";
        document.getElementById('answer-num3').style.color = "red";
    }
}   

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(question1.value.toLowerCase() == "manila"){
        document.getElementById('answer-num1').innerText = "Question 1 answer is correct!"
        document.getElementById('answer-num1').style.display = "block";
        document.getElementById('answer-num1').style.color = "green";
        score++;
    }else if (question1.value){
        document.getElementById('answer-num1').innerText = "Question 1 answer is incorrect!"
        document.getElementById('answer-num1').style.display = "block";
        document.getElementById('answer-num1').style.color = "red";
    }else if (!question1.value){
        document.getElementById('answer-num1').innerText = "You must enter an answer!"
        document.getElementById('answer-num1').style.display = "block";
        document.getElementById('answer-num1').style.color = "red";
    }
    if(question2.value == '13'){
        document.getElementById('answer-num2').innerText = "Question 2 answer is correct!"
        document.getElementById('answer-num2').style.display = "block";
        document.getElementById('answer-num2').style.color = "green";
        score++;
    }else if(question2.value == '25' || question2.value == '18'){
        document.getElementById('answer-num2').innerText = "Question 2 answer is incorrect!"
        document.getElementById('answer-num2').style.display = "block";
        document.getElementById('answer-num2').style.color = "red";
    }else if(question2.value == '') {
        document.getElementById('answer-num2').innerText = "You must enter an answer!"
        document.getElementById('answer-num2').style.display = "block";
        document.getElementById('answer-num2').style.color = "red";
    }

    checkBoxQuiz();

    if(question1.value && question2.value && question3.value){
        document.getElementById("score").innerText = `You Got ${score}`;
        document.getElementById("score").style.display = 'block';
        document.getElementById("score").style.zIndex = 0;
    }else{
        score = 0;
    }      
    
    
    
})

form.addEventListener('reset', function(e){
    e.preventDefault();
    
    question1.value = "";
    for(let i=0;i<question2.length;i++){
        question2[i].checked = false;
    }
    let checkBox3 = document.querySelectorAll('input[type="checkbox"]:checked');
    for(i = 0; i < checkBox3.length; i+=1){
        
        checkBox3[i].checked = false;
    }
    let allId = ["answer-num1", "answer-num2", "answer-num3"];
    for (i = 0; i < allId.length; i++){
        if(allId[i]){
            document.getElementById(allId[i]).style.display = "none";
        }
    }
})