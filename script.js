opt = document.getElementsByClassName("opt"); 
prev = document.getElementById("prev"); 
next = document.getElementById("next"); 
check = document.getElementById("check"); 
box = document.getElementById("box"); 

quesIndex = 0 ;
n = 4; 
let ques = [
 {
  question: "1. A linear collection of data elements where the linear node is given by means of pointer is called?",
  option1: "a) Linked list",
  option2: "b) Node list ",
  option3: "c) Primitive list",
  option4: "d) Unordered list ",
  answer: 1
 },
 {
  question: "2. In linked list each node contains a minimum of two fields. One field is data field to store the data second field is?",
  option1: "a) Pointer to character",
  option2: "b) Pointer to integer",
  option3: "c) Pointer to node",
  option4: "d) Node",
  answer: 3
 },
 {
  question: "3. What would be the asymptotic time complexity to add a node at the end of singly linked list, if the pointer is initially pointing to the head of the list?",
  option1: "a) O(1)",
  option2: "b) O(n)",
  option3: "c) θ(n)",
  option4: "d) θ(1)",
  answer: 3
 },
 {
  question: "4. The concatenation of two lists can be performed in O(1) time. Which of the following variation of the linked list can be used?",
  option1: "a) Singly linked list",
  option2: "b) Doubly linked list",
  option3: "c) Array implementation of list",
  option4: "d) Circular doubly linked list",
  answer: 4
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
})
})
check.addEventListener("click",()=>{
 right = document.getElementById(`${ques[quesIndex].answer}`); 
 right.style.background= "#90EE90" ;
})=s