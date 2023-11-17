import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Mydata from './Components/Mydata';
import MarksData from './Components/MarksData';

function App() {
  const questions=[{question:"What is the capital of Maharashtra?",option1:"Mumbai",option2:"Pune",option3:"Nashik",option4:"Nagpur",answer:"Mumbai"},
  {question:"What is the capital of India?",option1:"Mumbai",option2:"Pune",option3:"Delhi",option4:"Kolkata",answer:"Delhi"},
  {question:"What is the vice-capital of Maharashtra?",option1:"Mumbai",option2:"Nagpur",option3:"Delhi",option4:"Kolkata",answer:"Nagpur"},
  {question:"Which is highest peak in India?",option1:"Mt Everest",option2:"Kalsubai",option3:"Kanchenjunga",option4:"K2",answer:"K2"},
  {question:"Which city is called Oxford of the East",option1:"Mumbai",option2:"Pune",option3:"Delhi",option4:"Kolkata",answer:"Pune"},
 ];
 
 const [index,setIndex]=useState(0);
 const [seconds,setTotalSeconds]=useState(30);
 const [minutes,setMinutes]=useState(Math.floor(seconds/60));
 const [sec,setSec]=useState(seconds%60);
 const [marks,setMarks]=useState(0);
 const [flag,setFlag]=useState(false);

 function CheckData(e,index)
 {
  let dataval=e.target.value;
  if(dataval===questions[index].answer)
  {
    setMarks(marks+1);
  }

 }

 function myclick()
 {
  if(index<questions.length-1)
  {
    setIndex(index+1);
  }
  else{
    setFlag(true);
  }
  let mydata=document.querySelectorAll('.mycheck');
  for(let i=0;i<mydata.length;i++)
  {
    if(mydata[i].checked)
    {
      mydata[i].checked=false;
    }
  }
 }

 useEffect(()=>{
  let myinterval=setInterval(()=>{
    setTotalSeconds(seconds-1);
    setMinutes(Math.floor(seconds/60));
    setSec(seconds%60);
   
  },1000)
if(seconds<0||flag===true)
{
  setFlag(true);
  clearInterval(myinterval);
}

return () => clearInterval(myinterval);
 },[seconds,flag,minutes,sec])
  return (
    <div className="App container-fluid">
     <div className='quizdata px-2 py-2'>
      <h2 className='title text-center'>Quiz</h2>
     </div>
     {
      flag===false?
      
      <div className='mydivdata d-flex justify-content-center align-items-center px-2 py-2'>
        <h1 className={sec>5?`text-white bg-success px-3 py-3`:'text-white bg-danger px-3 py-3'}>{minutes}:{sec}</h1>
        </div>
        
        :''
     }

{
flag===true?<MarksData marks={marks} length={questions.length}></MarksData>:<Mydata questions={questions} CheckData={CheckData} myclick={myclick} index={index}></Mydata>
}
    </div>
  );
}

export default App;
