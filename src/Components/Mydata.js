import './Mydata.css';

function Mydata({questions,CheckData,myclick,index})
{
    return(
        < div className="mydiv mx-auto my-auto w-75 px-2 py-3 rounded">
        <div className='quizdiv w-100'>
<p className='questionnumber'>Question {index+1}/{questions.length}</p>
<p className='myquestion px-2 py-1'>{questions[index].question}</p>
<input type='radio' value={questions[index].option1}className='mycheck form-check-input mx-2 my-2' onChange={(e)=>CheckData(e,index)}></input>
<span className='px-2 py-2 myoptions'>{questions[index].option1}</span><br></br>
<input type='radio' value={questions[index].option2} className='mycheck form-check-input mx-2 my-2' onChange={(e)=>CheckData(e,index)}></input>
<span className='px-2 py-2 myoptions'>{questions[index].option2}</span><br></br>
<input type='radio' value={questions[index].option3} className='mycheck form-check-input mx-2 my-2' onChange={(e)=>CheckData(e,index)}></input>
<span className='px-2 py-2 myoptions'>{questions[index].option3}</span><br></br>
<input type='radio' value={questions[index].option4} className='mycheck form-check-input mx-2 my-2' onChange={(e)=>CheckData(e,index)}></input>
<span className='px-2 py-2 myoptions'>{questions[index].option4}</span><br></br>
<div>
<button onClick={myclick} className="d-block mx-auto mt-3 px-2 py-2 rounded btn btn-success w-50">Submit</button>
</div>
</div>

</div>

    )
}

export default Mydata;