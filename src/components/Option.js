import React from 'react';
import Form from 'react-bootstrap/Form';
import { Config } from '../config/Config';
import axios from 'axios';
import {symbolName} from "../quizQuestion";

class Option extends React.Component {
   
    constructor(props){
       
        super(props);
        this.state = {
            index : props.index,
            value : props.value,
            label : props.label,
            questionNo :props.questionNo
          };
          
    }
    render(){
        console.log(this.state);
        const { value, questionNo,label} = this.state;
       
    
        const profitLoss = ((value.fmpLast - value.open)/value.fmpLast);
       
        const PLPurcent = (profitLoss*100).toFixed(2);
        
        return (
            <div className="optionDiv mt-3" key={`key_${label}_${questionNo}`}>
            <Form.Check
                inline
                label={`${label}`}
                name={`group_${questionNo}`}
                type="radio"
                id={`option_${label}_${questionNo}`}
            />{`${symbolName[value.symbol]}`} &nbsp;&nbsp; ₹ {`${value.open}`} ,&nbsp;&nbsp;<span style={{
                color: Math.sign(PLPurcent) == "-1" ? "red" : "green"
              }}> {Math.sign(PLPurcent) == "-1" ? '-' : '+'}{`${PLPurcent} %`}</span>
            </div>
        )
    }
 
}

export default Option
