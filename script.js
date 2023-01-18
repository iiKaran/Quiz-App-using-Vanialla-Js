opt = document.getElementsByClassName("opt"); 
prev = document.getElementById("prev"); 
next = document.getElementById("next"); 
check = document.getElementById("check"); 
box = document.getElementById("box"); 

quesIndex = 0 ;
n = 4; 
let ques = [
 {
  question: "jack",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  answer: 2
 },
 {
  question: "tom",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  answer: 2
 },
 {
  question: "jack2",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  answer: 2
 },
 {
  question: "tom2",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  option1: "option1 ",
  answer: 2
 }
];
show();
function show()
{
 quesi = document.getElementById("ques");
 opt1 = document.getElementById("1");
 opt2 = document.getElementById("2");
 opt3 = document.getElementById("3");
 opt4 = document.getElementById("4");
 quesi.innerText = ques[quesIndex].question;
 opt1.innerText = ques[quesIndex].option1;
 opt2.innerText = ques[quesIndex].option2;
 opt3.innerText = ques[quesIndex].option3;
 opt4.innerText = ques[quesIndex].option4;
 check.innerText = "check answer"; 
 next.innerText = "next question"; 
 prev.innerText = "prev question"; 
 
}

prev.addEventListener("click",()=>{

 if(quesIndex ==0) quesIndex = n-1 ; 
 else
 quesIndex = (quesIndex-1)%n; 
 console.log(" click prev", quesIndex);
 show(); 
})
next.addEventListener("click",()=>{
 quesIndex = (quesIndex+1)%n; 
 console.log(" click next",quesIndex);
show();
})