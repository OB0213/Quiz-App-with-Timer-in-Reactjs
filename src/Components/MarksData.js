
import './MarksData.css';
function MarksData({marks,length})
{

    function TryAgain()
    {
        window.location.reload();
    }
    return(
        <div className='d-flex justify-content-center align-items-center'>
        <div className="maindata mx-auto w-75 px-3 py-3 rounded">
           {
            marks>0? <h1 className=' salutation text-center'>Congratulations !!!</h1>:<h1 className=' salutation text-center'>Oops !!!</h1>
           }
            <h3 className='text-white text-center'>You scored <span className='mymarks'>{marks}</span> </h3>

            <button className='btn btn-primary d-block mx-auto w-50 px-2 py-2 rounded mt-3 mb-3' onClick={TryAgain}>Try Again</button>
        </div>
        </div>
    )
}

export default MarksData;