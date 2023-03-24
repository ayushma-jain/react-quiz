import React from 'react'

import {GrMoney} from 'react-icons/gr';
import {BsGiftFill} from 'react-icons/bs';
import {AiFillCheckCircle} from "react-icons/ai";

function Score() {
  return (
    <div>
    <div className="row p-4 questionDiv ">
        <div className='offset-md-3 col-6 mt-5 mb-4'><BsGiftFill style={{"font-size":"80px"}}/></div>
        <div className="offset-md-2 col-8 mt-4">
            <div className="quiz-question">Results of Fantasy Quiz</div>
        </div>
        <div className="offset-md-3 col-6 mt-4">
            <div className='row bg-white  mb-5 mt-5'>
                
                <div className='col-2 mb-3' style={{'margin':'auto'}}>
                    <GrMoney />
                </div>
                <div className='col-8 mb-3 mt-3'>
                    SCORE GAINED
                </div>
                <div className='col-2 mb-3 mt-3'>
                    10
                </div>
                <div className='col-2 mb-3 mt-3' style={{'margin':'auto'}}>
                    <AiFillCheckCircle />
                </div>
                <div className='col-8 mb-3'>
                    CORRECT PREDICTIONS
                </div>
                <div className='col-2 mb-3'>
                    10
                </div>
            </div>
        </div>
    </div>
    
    <a href="/" className='text-white'><button className="btn btn-success btn-sm float-left left-btn col-2" type="submit" >Restart</button></a>
        <button className="btn btn-success btn-sm float-right right-btn col-2" disabled type="submit">Done</button>
    </div>
    
  )
}

export default Score
