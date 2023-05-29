const myQuestions = 
[
 {
  id: 0,
  quizQuestion: "Je pivo super?",
  quizAnswers: [
      { text: "Ne", isCorrect: false },
      { text: "Pivo neexistuje", isCorrect: false },
      { text: "Ano!", isCorrect: true }
  ]
 },
 {
  id: 1,
  quizQuestion: "Je Radegast 10° alkoholický nápoj?",
  quizAnswers: [
      { text: "Nic takového neexistuje", isCorrect: false },
      { text: "Ano, je", isCorrect: false },
      { text: "Ne", isCorrect: true }
  ]
 },
 {
  id: 2,
  quizQuestion: "Jaký pivovar je sponzor Extraligy ledního hokeje?",
  quizAnswers: [
      { text: "Radegast", isCorrect: true},
      { text: "Braník", isCorrect: false },
      { text: "Ostravar", isCorrect: false }
  ]
 }, 
 {
  id: 3,
  quizQuestion: "Kolik litrů piva na osobu se v ČR vypije?",
  quizAnswers: [
      { text: "135", isCorrect: true },
      { text: "220", isCorrect: false },
      { text: "80", isCorrect: false }
  ]
 },
 {
  id: 4,
  quizQuestion: "Čeho se bojí cenosillicafobiak?",
  quizAnswers: [
      { text: "ječmených výrobků", isCorrect: false },
      { text: "prázdné sklenice od piva", isCorrect: true },
      { text: "žen, čepujících pivo", isCorrect: false }
  ]
 },
 {
  id: 5,
  quizQuestion: "Co je nejlepší na kocovinu?",
  quizAnswers: [
      { text: "Vyprošťovák", isCorrect: false },
      { text: "vítamín C", isCorrect: false },
      { text: "pivo", isCorrect: true }
  ]
 },
 {
  id: 6,
  quizQuestion: "Kolik procent alkoholu má nejsilnější pivo na světě?",
  quizAnswers: [
      { text: "38.5%", isCorrect: false },
      { text: "53,5%", isCorrect: false },
      { text: "67,5%", isCorrect: true }
  ]
 },
 {
  id: 7,
  quizQuestion: "Kdo je autorem prvního loga piva Braník?",
  quizAnswers: [
      { text: "Frantíšek Ringo Čech", isCorrect: false },
      { text: "Mikoláš Aleš", isCorrect: true },
      { text: "Alfons Mucha", isCorrect: false }
  ]
 },
 {
  id: 8,
  quizQuestion: "Dal by sis pivo?",
  quizAnswers: [
      { text: "Taky ano", isCorrect: true },
      { text: "Ano, ale jiné pole", isCorrect: true },
      { text: "Ano", isCorrect: true }
  ]
 },
 {
  id: 9,
  quizQuestion: "V jakém roce sis mohl dát poprvé Braníček v petce?",
  quizAnswers: [
      { text: "2012", isCorrect: false },
      { text: "2011", isCorrect: false },
      { text: "2010", isCorrect: true }
  ]
 },
]





const questionElement = document.getElementById('question');
const skoreElement = document.getElementById('skore');
const vysledekElement = document.getElementById('vysledek');
const vysledekElementskore = document.getElementById('vysledekskore');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');  
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');

if(localStorage.hasOwnProperty('highscore') == false){
  localStorage.setItem("highscore", 0);
}

btn4.style.visibility="hidden";
let currentID;
let skore = 0;
let otazky = myQuestions;
let working = true;
console.log(otazky.length);


function setup(){
    skore = 0;
    otazky = myQuestions;
    skoreElement.innerText = "Tvé skóre je: " + String(skore);
    btn4.style.visibility="hidden";
    vysledekElement.innerText = "";
    vysledekElementskore.innerText = "";
    working = true
    NewQuiz();
}

bodyElement.onload = function() 
{
  NewQuiz();
}

function NewQuiz() 
{
  console.log(otazky.length)
  console.log(myQuestions.length)
  if (otazky.length > 0){
  currentID = Math.floor(Math.random() * otazky.length);
  showQuestion(currentID);}
  else{
    questionElement.innerText = "To je vše! Skvělá práce! \n Chceš to zkusit znova?";
    btn1.style.visibility ="hidden"
    btn2.style.visibility ="hidden"
    btn3.style.visibility ="hidden"
    btn4.style.visibility="visible";

  }
}

function showQuestion(currentID) 
{
  questionElement.innerText = otazky[currentID].quizQuestion;
  btn1.innerText=otazky[currentID].quizAnswers[0].text; 
  btn2.innerText=otazky[currentID].quizAnswers[1].text;   
  btn3.innerText=otazky[currentID].quizAnswers[2].text;
  btn1.style.visibility="visible";
  btn2.style.visibility="visible";
  btn3.style.visibility="visible";
  btn4.style.visibility="hidden";
}

btn1.onclick = function() 
{
  if(working == true){
  if(otazky[currentID].quizAnswers[0].isCorrect == true)
  {
    skore += 1;
    skoreElement.innerText = "Tvé skóre je: " + String(skore);
    otazky.splice(currentID,1);
    NewQuiz();
  } 
  else{
    vysledekElement.innerText = "Špatně!";
    working = false
    vysledekElement.style.color = "red";
    vysledekElement.style.fontSize = "50px";
    if(localStorage.getItem("highscore") < skore){
      localStorage.setItem("highscore", skore);
    }
    vysledekElementskore.innerText = "Nejvyšší skóre: " + String(localStorage.getItem("highscore"));
    btn4.style.visibility="visible";
    
} }
}

btn2.onclick = function() 
{if(working == true){
    if(otazky[currentID].quizAnswers[1].isCorrect == true)
    {
      skore += 1;
      skoreElement.innerText = "Tvé skóre je: " + String(skore);
      otazky.splice(currentID,1);
      NewQuiz();
    } 
    else{
        vysledekElement.innerText = "Špatně!";
        working = false
        vysledekElement.style.color = "red";
        vysledekElement.style.fontSize = "50px";
        if(localStorage.getItem("highscore") < skore){
          localStorage.setItem("highscore", skore);
        }
        vysledekElementskore.innerText = "Nejvyšší skóre: " + String(localStorage.getItem("highscore"));
        btn4.style.visibility="visible";
        
    }
}}  

btn3.onclick = function() 
{ if(working == true){
    if(otazky[currentID].quizAnswers[2].isCorrect == true)
    {
      skore += 1;
      skoreElement.innerText = "Tvé skóre je: " + String(skore);
      otazky.splice(currentID,1);
      NewQuiz();
    } 
    else{
        vysledekElement.innerText = "Špatně!";
        working = false
        vysledekElement.style.color = "red";
        vysledekElement.style.fontSize = "50px";
        if(localStorage.getItem("highscore") < skore){
          localStorage.setItem("highscore", skore);
        }
        vysledekElementskore.innerText = "Nejvyšší skóre: " + String(localStorage.getItem("highscore"));
        btn4.style.visibility="visible";
        
    }
}
}
btn4.onclick = function(){
  setup()
}
