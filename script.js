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
  answer: 1
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
 opt1 = document.getElementById("1");
 opt2 = document.getElementById("2");
 opt3 = document.getElementById("3");
 opt4 = document.getElementById("4");
show();
function setbg()
{
 Array.from(opt).forEach((e)=>{
  e.style.background = "white";
 })
}
function show()
{
 quesi = document.getElementById("ques");
 quesi.innerText = ques[quesIndex].question;
 opt1.innerText = ques[quesIndex].option1;
 opt2.innerText = ques[quesIndex].option2;
 opt3.innerText = ques[quesIndex].option3;
 opt4.innerText = ques[quesIndex].option4;
 check.innerText = "Get answer"; 
 next.innerText = "next question"; 
 prev.innerText = "prev question"; 
}
prev.addEventListener("click",()=>{
 if(quesIndex ==0) quesIndex = n-1 ; 
 else
 quesIndex = (quesIndex-1)%n; 
 console.log(" click prev", quesIndex);
 setbg();
 show(); 

})
next.addEventListener("click",()=>{
 quesIndex = (quesIndex+1)%n; 
 console.log(" click next",quesIndex);
setbg();
show();
})

function verify(selected)
{
 ans = ques[quesIndex].answer; 
 if(ans ==1 )
 {
 opt1.style.background= "#90EE90" ;
 }
 else if( ans ==2 ){
 opt1.style.background= "#90EE90" ;
 }
 else if (ans ==3)
 {
  opt1.style.background= "#90EE90" ;
 }
 else {
  opt1.style.background= "#90EE90" ;
 }
if(selected == ans)
{
 return ; 
}
else{
 wrong = document.getElementById(`${selected}`)
 wrong.style.background = "red";
}
 console.log(ans);
}

Array.from(opt).forEach((e)=>{
e.addEventListener("click",(element)=>{
  element.target.style.background = "rgba(128, 0, 128, 0.279)";
  d = element.target.id ; 
  console.log(d);
  verify(d);
})
})
check.addEventListener("click",()=>{
 right = document.getElementById(`${ques[quesIndex].answer}`); 
 right.style.background= "#90EE90" ;
})